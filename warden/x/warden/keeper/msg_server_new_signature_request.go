package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gogoproto/proto"

	intenttypes "github.com/warden-protocol/wardenprotocol/warden/x/intent/types"
	"github.com/warden-protocol/wardenprotocol/warden/x/warden/types"
)

func (k msgServer) NewSignatureRequest(goCtx context.Context, msg *types.MsgNewSignatureRequest) (*intenttypes.MsgActionCreated, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	key, err := k.keys.Get(ctx, msg.KeyId)
	if err != nil {
		return nil, err
	}

	if len(msg.DataForSigning) != 32 && key.Type == types.KeyType_KEY_TYPE_ECDSA_SECP256K1 {
		return nil, fmt.Errorf("signed data is not 32 bytes. Length is: %d", len(msg.DataForSigning))
	}

	ws, err := k.GetSpace(ctx, key.SpaceAddr)
	if err != nil {
		return nil, err
	}

	keychain, err := k.GetKeychain(ctx, key.KeychainAddr)
	if err != nil {
		return nil, err
	}

	if !keychain.IsActive {
		return nil, fmt.Errorf("keychain is nil or is inactive")
	}

	act, err := k.intentKeeper.AddAction(ctx, msg.Creator, msg, ws.SignIntentId, msg.Btl)
	if err != nil {
		return nil, err
	}

	return &intenttypes.MsgActionCreated{Action: act}, nil
}

func (k msgServer) NewSignatureRequestIntentGenerator(ctx sdk.Context, act intenttypes.Action) (intenttypes.Intent, error) {
	msg, err := intenttypes.GetActionMessage[*types.MsgNewSignatureRequest](k.cdc, act)
	if err != nil {
		return intenttypes.Intent{}, err
	}

	key, err := k.keys.Get(ctx, msg.KeyId)
	if err != nil {
		return intenttypes.Intent{}, err
	}

	ws, err := k.GetSpace(ctx, key.SpaceAddr)
	if err != nil {
		return intenttypes.Intent{}, err
	}

	pol := ws.IntentNewSignatureRequest()
	return pol, nil
}

func (k msgServer) NewSignatureRequestActionHandler(ctx sdk.Context, act intenttypes.Action) (proto.Message, error) {
	msg, err := intenttypes.GetActionMessage[*types.MsgNewSignatureRequest](k.cdc, act)
	if err != nil {
		return nil, err
	}

	key, err := k.keys.Get(ctx, msg.KeyId)
	if err != nil {
		return nil, err
	}

	_, err = k.GetSpace(ctx, key.SpaceAddr)
	if err != nil {
		return nil, err
	}

	keychain, err := k.GetKeychain(ctx, key.KeychainAddr)
	if err != nil {
		return nil, err
	}

	if keychain.Fees != nil {
		err := k.bankKeeper.SendCoins(
			ctx,
			sdk.AccAddress(msg.Creator),
			sdk.AccAddress(key.KeychainAddr),
			sdk.NewCoins(sdk.NewInt64Coin("uward", keychain.Fees.SigReq)),
		)
		if err != nil {
			return nil, err
		}
	}

	req := &types.SignRequest{
		Creator:        msg.Creator,
		KeyId:          msg.KeyId,
		KeyType:        key.Type,
		DataForSigning: msg.DataForSigning,
		Status:         types.SignRequestStatus_SIGN_REQUEST_STATUS_PENDING,
	}

	id, err := k.signatureRequests.Append(ctx, req)
	if err != nil {
		return nil, err
	}

	return &types.MsgNewSignatureRequestResponse{Id: id}, nil
}
