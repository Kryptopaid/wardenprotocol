import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryUnbondingDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUndelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { Validator } from "./types/cosmos/staking/v1beta1/staking";
import { UnbondingDelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationEntry } from "./types/cosmos/staking/v1beta1/staking";
import { QueryRedelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { Params } from "./types/cosmos/staking/v1beta1/staking";
import { DVVTriplet } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { StakeAuthorization } from "./types/cosmos/staking/v1beta1/authz";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { QueryDelegatorDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { CommissionRates } from "./types/cosmos/staking/v1beta1/staking";
import { Commission } from "./types/cosmos/staking/v1beta1/staking";
import { RedelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryPoolRequest } from "./types/cosmos/staking/v1beta1/query";
import { StakeAuthorization_Validators } from "./types/cosmos/staking/v1beta1/authz";
import { LastValidatorPower } from "./types/cosmos/staking/v1beta1/genesis";
import { Pool } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { GenesisState } from "./types/cosmos/staking/v1beta1/genesis";
import { MsgUpdateParamsResponse } from "./types/cosmos/staking/v1beta1/tx";
import { DVPair } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegationRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryRedelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegationResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryPoolResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUpdateParams } from "./types/cosmos/staking/v1beta1/tx";
import { DVPairs } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorUnbondingDelegationsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";
import { UnbondingDelegation } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryHistoricalInfoRequest } from "./types/cosmos/staking/v1beta1/query";
import { MsgCreateValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegateResponse } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { RedelegationEntryResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorUnbondingDelegationsRequest } from "./types/cosmos/staking/v1beta1/query";
import { QueryValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgEditValidatorResponse } from "./types/cosmos/staking/v1beta1/tx";
import { DVVTriplets } from "./types/cosmos/staking/v1beta1/staking";
import { Description } from "./types/cosmos/staking/v1beta1/staking";
import { ValAddresses } from "./types/cosmos/staking/v1beta1/staking";
import { Redelegation } from "./types/cosmos/staking/v1beta1/staking";
import { DelegationResponse } from "./types/cosmos/staking/v1beta1/staking";
import { QueryDelegatorValidatorResponse } from "./types/cosmos/staking/v1beta1/query";
import { MsgCancelUnbondingDelegationResponse } from "./types/cosmos/staking/v1beta1/tx";
import { HistoricalInfo } from "./types/cosmos/staking/v1beta1/staking";
import { Delegation } from "./types/cosmos/staking/v1beta1/staking";
import { ValidatorUpdates } from "./types/cosmos/staking/v1beta1/staking";
export { QueryUnbondingDelegationRequest, QueryHistoricalInfoResponse, MsgUndelegateResponse, Validator, UnbondingDelegationEntry, RedelegationEntry, QueryRedelegationsRequest, Params, DVVTriplet, QueryDelegatorDelegationsResponse, QueryValidatorDelegationsRequest, StakeAuthorization, MsgBeginRedelegate, MsgCreateValidator, QueryDelegatorDelegationsRequest, QueryValidatorDelegationsResponse, MsgEditValidator, MsgDelegateResponse, CommissionRates, Commission, RedelegationResponse, QueryPoolRequest, StakeAuthorization_Validators, LastValidatorPower, Pool, QueryValidatorRequest, QueryUnbondingDelegationResponse, GenesisState, MsgUpdateParamsResponse, DVPair, QueryDelegationRequest, QueryRedelegationsResponse, QueryParamsRequest, QueryDelegationResponse, QueryPoolResponse, MsgDelegate, MsgUpdateParams, DVPairs, QueryValidatorsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponse, QueryParamsResponse, MsgUndelegate, UnbondingDelegation, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorRequest, QueryHistoricalInfoRequest, MsgCreateValidatorResponse, MsgBeginRedelegateResponse, MsgCancelUnbondingDelegation, RedelegationEntryResponse, QueryValidatorsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorResponse, QueryDelegatorValidatorsResponse, MsgEditValidatorResponse, DVVTriplets, Description, ValAddresses, Redelegation, DelegationResponse, QueryDelegatorValidatorResponse, MsgCancelUnbondingDelegationResponse, HistoricalInfo, Delegation, ValidatorUpdates };
type sendQueryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryParams = {
    value: RedelegationEntry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletParams = {
    value: DVVTriplet;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorizationParams = {
    value: StakeAuthorization;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorParams = {
    value: MsgCreateValidator;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorParams = {
    value: MsgEditValidator;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateResponseParams = {
    value: MsgDelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionRatesParams = {
    value: CommissionRates;
    fee?: StdFee;
    memo?: string;
};
type sendCommissionParams = {
    value: Commission;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationResponseParams = {
    value: RedelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolRequestParams = {
    value: QueryPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendStakeAuthorization_ValidatorsParams = {
    value: StakeAuthorization_Validators;
    fee?: StdFee;
    memo?: string;
};
type sendLastValidatorPowerParams = {
    value: LastValidatorPower;
    fee?: StdFee;
    memo?: string;
};
type sendPoolParams = {
    value: Pool;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorRequestParams = {
    value: QueryValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairParams = {
    value: DVPair;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRequestParams = {
    value: QueryDelegationRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationResponseParams = {
    value: QueryDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPoolResponseParams = {
    value: QueryPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDelegateParams = {
    value: MsgDelegate;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendDVPairsParams = {
    value: DVPairs;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUndelegateParams = {
    value: MsgUndelegate;
    fee?: StdFee;
    memo?: string;
};
type sendUnbondingDelegationParams = {
    value: UnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorResponseParams = {
    value: QueryValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendDVVTripletsParams = {
    value: DVVTriplets;
    fee?: StdFee;
    memo?: string;
};
type sendDescriptionParams = {
    value: Description;
    fee?: StdFee;
    memo?: string;
};
type sendValAddressesParams = {
    value: ValAddresses;
    fee?: StdFee;
    memo?: string;
};
type sendRedelegationParams = {
    value: Redelegation;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationResponseParams = {
    value: DelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
    fee?: StdFee;
    memo?: string;
};
type sendHistoricalInfoParams = {
    value: HistoricalInfo;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationParams = {
    value: Delegation;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorUpdatesParams = {
    value: ValidatorUpdates;
    fee?: StdFee;
    memo?: string;
};
type queryUnbondingDelegationRequestParams = {
    value: QueryUnbondingDelegationRequest;
};
type queryHistoricalInfoResponseParams = {
    value: QueryHistoricalInfoResponse;
};
type msgUndelegateResponseParams = {
    value: MsgUndelegateResponse;
};
type validatorParams = {
    value: Validator;
};
type unbondingDelegationEntryParams = {
    value: UnbondingDelegationEntry;
};
type redelegationEntryParams = {
    value: RedelegationEntry;
};
type queryRedelegationsRequestParams = {
    value: QueryRedelegationsRequest;
};
type paramsParams = {
    value: Params;
};
type dvvtripletParams = {
    value: DVVTriplet;
};
type queryDelegatorDelegationsResponseParams = {
    value: QueryDelegatorDelegationsResponse;
};
type queryValidatorDelegationsRequestParams = {
    value: QueryValidatorDelegationsRequest;
};
type stakeAuthorizationParams = {
    value: StakeAuthorization;
};
type msgBeginRedelegateParams = {
    value: MsgBeginRedelegate;
};
type msgCreateValidatorParams = {
    value: MsgCreateValidator;
};
type queryDelegatorDelegationsRequestParams = {
    value: QueryDelegatorDelegationsRequest;
};
type queryValidatorDelegationsResponseParams = {
    value: QueryValidatorDelegationsResponse;
};
type msgEditValidatorParams = {
    value: MsgEditValidator;
};
type msgDelegateResponseParams = {
    value: MsgDelegateResponse;
};
type commissionRatesParams = {
    value: CommissionRates;
};
type commissionParams = {
    value: Commission;
};
type redelegationResponseParams = {
    value: RedelegationResponse;
};
type queryPoolRequestParams = {
    value: QueryPoolRequest;
};
type stakeAuthorizationValidatorsParams = {
    value: StakeAuthorization_Validators;
};
type lastValidatorPowerParams = {
    value: LastValidatorPower;
};
type poolParams = {
    value: Pool;
};
type queryValidatorRequestParams = {
    value: QueryValidatorRequest;
};
type queryUnbondingDelegationResponseParams = {
    value: QueryUnbondingDelegationResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type dvpairParams = {
    value: DVPair;
};
type queryDelegationRequestParams = {
    value: QueryDelegationRequest;
};
type queryRedelegationsResponseParams = {
    value: QueryRedelegationsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDelegationResponseParams = {
    value: QueryDelegationResponse;
};
type queryPoolResponseParams = {
    value: QueryPoolResponse;
};
type msgDelegateParams = {
    value: MsgDelegate;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type dvpairsParams = {
    value: DVPairs;
};
type queryValidatorsRequestParams = {
    value: QueryValidatorsRequest;
};
type queryValidatorUnbondingDelegationsResponseParams = {
    value: QueryValidatorUnbondingDelegationsResponse;
};
type queryDelegatorUnbondingDelegationsResponseParams = {
    value: QueryDelegatorUnbondingDelegationsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgUndelegateParams = {
    value: MsgUndelegate;
};
type unbondingDelegationParams = {
    value: UnbondingDelegation;
};
type queryDelegatorUnbondingDelegationsRequestParams = {
    value: QueryDelegatorUnbondingDelegationsRequest;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type queryDelegatorValidatorRequestParams = {
    value: QueryDelegatorValidatorRequest;
};
type queryHistoricalInfoRequestParams = {
    value: QueryHistoricalInfoRequest;
};
type msgCreateValidatorResponseParams = {
    value: MsgCreateValidatorResponse;
};
type msgBeginRedelegateResponseParams = {
    value: MsgBeginRedelegateResponse;
};
type msgCancelUnbondingDelegationParams = {
    value: MsgCancelUnbondingDelegation;
};
type redelegationEntryResponseParams = {
    value: RedelegationEntryResponse;
};
type queryValidatorsResponseParams = {
    value: QueryValidatorsResponse;
};
type queryValidatorUnbondingDelegationsRequestParams = {
    value: QueryValidatorUnbondingDelegationsRequest;
};
type queryValidatorResponseParams = {
    value: QueryValidatorResponse;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type msgEditValidatorResponseParams = {
    value: MsgEditValidatorResponse;
};
type dvvtripletsParams = {
    value: DVVTriplets;
};
type descriptionParams = {
    value: Description;
};
type valAddressesParams = {
    value: ValAddresses;
};
type redelegationParams = {
    value: Redelegation;
};
type delegationResponseParams = {
    value: DelegationResponse;
};
type queryDelegatorValidatorResponseParams = {
    value: QueryDelegatorValidatorResponse;
};
type msgCancelUnbondingDelegationResponseParams = {
    value: MsgCancelUnbondingDelegationResponse;
};
type historicalInfoParams = {
    value: HistoricalInfo;
};
type delegationParams = {
    value: Delegation;
};
type validatorUpdatesParams = {
    value: ValidatorUpdates;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryUnbondingDelegationRequest({ value, fee, memo }: sendQueryUnbondingDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoResponse({ value, fee, memo }: sendQueryHistoricalInfoResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegateResponse({ value, fee, memo }: sendMsgUndelegateResponseParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegationEntry({ value, fee, memo }: sendUnbondingDelegationEntryParams): Promise<DeliverTxResponse>;
    sendRedelegationEntry({ value, fee, memo }: sendRedelegationEntryParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsRequest({ value, fee, memo }: sendQueryRedelegationsRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendDVVTriplet({ value, fee, memo }: sendDVVTripletParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsResponse({ value, fee, memo }: sendQueryDelegatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsRequest({ value, fee, memo }: sendQueryValidatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization({ value, fee, memo }: sendStakeAuthorizationParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorDelegationsRequest({ value, fee, memo }: sendQueryDelegatorDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDelegationsResponse({ value, fee, memo }: sendQueryValidatorDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse>;
    sendMsgDelegateResponse({ value, fee, memo }: sendMsgDelegateResponseParams): Promise<DeliverTxResponse>;
    sendCommissionRates({ value, fee, memo }: sendCommissionRatesParams): Promise<DeliverTxResponse>;
    sendCommission({ value, fee, memo }: sendCommissionParams): Promise<DeliverTxResponse>;
    sendRedelegationResponse({ value, fee, memo }: sendRedelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryPoolRequest({ value, fee, memo }: sendQueryPoolRequestParams): Promise<DeliverTxResponse>;
    sendStakeAuthorization_Validators({ value, fee, memo }: sendStakeAuthorization_ValidatorsParams): Promise<DeliverTxResponse>;
    sendLastValidatorPower({ value, fee, memo }: sendLastValidatorPowerParams): Promise<DeliverTxResponse>;
    sendPool({ value, fee, memo }: sendPoolParams): Promise<DeliverTxResponse>;
    sendQueryValidatorRequest({ value, fee, memo }: sendQueryValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnbondingDelegationResponse({ value, fee, memo }: sendQueryUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendDVPair({ value, fee, memo }: sendDVPairParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRequest({ value, fee, memo }: sendQueryDelegationRequestParams): Promise<DeliverTxResponse>;
    sendQueryRedelegationsResponse({ value, fee, memo }: sendQueryRedelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegationResponse({ value, fee, memo }: sendQueryDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryPoolResponse({ value, fee, memo }: sendQueryPoolResponseParams): Promise<DeliverTxResponse>;
    sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendDVPairs({ value, fee, memo }: sendDVPairsParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsRequest({ value, fee, memo }: sendQueryValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse>;
    sendUnbondingDelegation({ value, fee, memo }: sendUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryDelegatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorRequest({ value, fee, memo }: sendQueryDelegatorValidatorRequestParams): Promise<DeliverTxResponse>;
    sendQueryHistoricalInfoRequest({ value, fee, memo }: sendQueryHistoricalInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateValidatorResponse({ value, fee, memo }: sendMsgCreateValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBeginRedelegateResponse({ value, fee, memo }: sendMsgBeginRedelegateResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse>;
    sendRedelegationEntryResponse({ value, fee, memo }: sendRedelegationEntryResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorsResponse({ value, fee, memo }: sendQueryValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: sendQueryValidatorUnbondingDelegationsRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorResponse({ value, fee, memo }: sendQueryValidatorResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendMsgEditValidatorResponse({ value, fee, memo }: sendMsgEditValidatorResponseParams): Promise<DeliverTxResponse>;
    sendDVVTriplets({ value, fee, memo }: sendDVVTripletsParams): Promise<DeliverTxResponse>;
    sendDescription({ value, fee, memo }: sendDescriptionParams): Promise<DeliverTxResponse>;
    sendValAddresses({ value, fee, memo }: sendValAddressesParams): Promise<DeliverTxResponse>;
    sendRedelegation({ value, fee, memo }: sendRedelegationParams): Promise<DeliverTxResponse>;
    sendDelegationResponse({ value, fee, memo }: sendDelegationResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorResponse({ value, fee, memo }: sendQueryDelegatorValidatorResponseParams): Promise<DeliverTxResponse>;
    sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: sendMsgCancelUnbondingDelegationResponseParams): Promise<DeliverTxResponse>;
    sendHistoricalInfo({ value, fee, memo }: sendHistoricalInfoParams): Promise<DeliverTxResponse>;
    sendDelegation({ value, fee, memo }: sendDelegationParams): Promise<DeliverTxResponse>;
    sendValidatorUpdates({ value, fee, memo }: sendValidatorUpdatesParams): Promise<DeliverTxResponse>;
    queryUnbondingDelegationRequest({ value }: queryUnbondingDelegationRequestParams): EncodeObject;
    queryHistoricalInfoResponse({ value }: queryHistoricalInfoResponseParams): EncodeObject;
    msgUndelegateResponse({ value }: msgUndelegateResponseParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    unbondingDelegationEntry({ value }: unbondingDelegationEntryParams): EncodeObject;
    redelegationEntry({ value }: redelegationEntryParams): EncodeObject;
    queryRedelegationsRequest({ value }: queryRedelegationsRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    dvvtriplet({ value }: dvvtripletParams): EncodeObject;
    queryDelegatorDelegationsResponse({ value }: queryDelegatorDelegationsResponseParams): EncodeObject;
    queryValidatorDelegationsRequest({ value }: queryValidatorDelegationsRequestParams): EncodeObject;
    stakeAuthorization({ value }: stakeAuthorizationParams): EncodeObject;
    msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject;
    msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject;
    queryDelegatorDelegationsRequest({ value }: queryDelegatorDelegationsRequestParams): EncodeObject;
    queryValidatorDelegationsResponse({ value }: queryValidatorDelegationsResponseParams): EncodeObject;
    msgEditValidator({ value }: msgEditValidatorParams): EncodeObject;
    msgDelegateResponse({ value }: msgDelegateResponseParams): EncodeObject;
    commissionRates({ value }: commissionRatesParams): EncodeObject;
    commission({ value }: commissionParams): EncodeObject;
    redelegationResponse({ value }: redelegationResponseParams): EncodeObject;
    queryPoolRequest({ value }: queryPoolRequestParams): EncodeObject;
    stakeAuthorizationValidators({ value }: stakeAuthorizationValidatorsParams): EncodeObject;
    lastValidatorPower({ value }: lastValidatorPowerParams): EncodeObject;
    pool({ value }: poolParams): EncodeObject;
    queryValidatorRequest({ value }: queryValidatorRequestParams): EncodeObject;
    queryUnbondingDelegationResponse({ value }: queryUnbondingDelegationResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    dvpair({ value }: dvpairParams): EncodeObject;
    queryDelegationRequest({ value }: queryDelegationRequestParams): EncodeObject;
    queryRedelegationsResponse({ value }: queryRedelegationsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDelegationResponse({ value }: queryDelegationResponseParams): EncodeObject;
    queryPoolResponse({ value }: queryPoolResponseParams): EncodeObject;
    msgDelegate({ value }: msgDelegateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    dvpairs({ value }: dvpairsParams): EncodeObject;
    queryValidatorsRequest({ value }: queryValidatorsRequestParams): EncodeObject;
    queryValidatorUnbondingDelegationsResponse({ value }: queryValidatorUnbondingDelegationsResponseParams): EncodeObject;
    queryDelegatorUnbondingDelegationsResponse({ value }: queryDelegatorUnbondingDelegationsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgUndelegate({ value }: msgUndelegateParams): EncodeObject;
    unbondingDelegation({ value }: unbondingDelegationParams): EncodeObject;
    queryDelegatorUnbondingDelegationsRequest({ value }: queryDelegatorUnbondingDelegationsRequestParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    queryDelegatorValidatorRequest({ value }: queryDelegatorValidatorRequestParams): EncodeObject;
    queryHistoricalInfoRequest({ value }: queryHistoricalInfoRequestParams): EncodeObject;
    msgCreateValidatorResponse({ value }: msgCreateValidatorResponseParams): EncodeObject;
    msgBeginRedelegateResponse({ value }: msgBeginRedelegateResponseParams): EncodeObject;
    msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject;
    redelegationEntryResponse({ value }: redelegationEntryResponseParams): EncodeObject;
    queryValidatorsResponse({ value }: queryValidatorsResponseParams): EncodeObject;
    queryValidatorUnbondingDelegationsRequest({ value }: queryValidatorUnbondingDelegationsRequestParams): EncodeObject;
    queryValidatorResponse({ value }: queryValidatorResponseParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    msgEditValidatorResponse({ value }: msgEditValidatorResponseParams): EncodeObject;
    dvvtriplets({ value }: dvvtripletsParams): EncodeObject;
    description({ value }: descriptionParams): EncodeObject;
    valAddresses({ value }: valAddressesParams): EncodeObject;
    redelegation({ value }: redelegationParams): EncodeObject;
    delegationResponse({ value }: delegationResponseParams): EncodeObject;
    queryDelegatorValidatorResponse({ value }: queryDelegatorValidatorResponseParams): EncodeObject;
    msgCancelUnbondingDelegationResponse({ value }: msgCancelUnbondingDelegationResponseParams): EncodeObject;
    historicalInfo({ value }: historicalInfoParams): EncodeObject;
    delegation({ value }: delegationParams): EncodeObject;
    validatorUpdates({ value }: validatorUpdatesParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosStakingV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
