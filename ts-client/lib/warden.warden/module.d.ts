import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgNewSignTransactionRequest } from "./types/warden/warden/tx";
import { MsgNewSignTransactionRequestResponse } from "./types/warden/warden/tx";
import { SignTransactionRequestResponse } from "./types/warden/warden/query";
import { MsgNewSpace } from "./types/warden/warden/tx";
import { MsgNewKeychain } from "./types/warden/warden/tx";
import { MsgNewSignatureRequest } from "./types/warden/warden/tx";
import { QueryKeychainsResponse } from "./types/warden/warden/query";
import { MsgNewSignatureRequestResponse } from "./types/warden/warden/tx";
import { SignRequest } from "./types/warden/warden/signature";
import { QueryKeychainsRequest } from "./types/warden/warden/query";
import { QuerySpaceByAddressRequest } from "./types/warden/warden/query";
import { Space } from "./types/warden/warden/space";
import { Params } from "./types/warden/warden/params";
import { MsgAddSpaceOwner } from "./types/warden/warden/tx";
import { MsgNewKeyRequestResponse } from "./types/warden/warden/tx";
import { QueryKeyRequestsResponse } from "./types/warden/warden/query";
import { QuerySignatureRequestsResponse } from "./types/warden/warden/query";
import { MsgUpdateKeyRequestResponse } from "./types/warden/warden/tx";
import { QuerySpaceByAddressResponse } from "./types/warden/warden/query";
import { QueryKeychainByAddressRequest } from "./types/warden/warden/query";
import { MsgFulfilSignatureRequestResponse } from "./types/warden/warden/tx";
import { SignTransactionRequest } from "./types/warden/warden/signature";
import { Key } from "./types/warden/warden/key";
import { MsgUpdateParamsResponse } from "./types/warden/warden/tx";
import { MsgAddSpaceOwnerResponse } from "./types/warden/warden/tx";
import { MsgNewKeychainResponse } from "./types/warden/warden/tx";
import { QuerySpacesRequest } from "./types/warden/warden/query";
import { MsgRemoveSpaceOwnerResponse } from "./types/warden/warden/tx";
import { MsgUpdateSpace } from "./types/warden/warden/tx";
import { QueryKeyRequestByIdRequest } from "./types/warden/warden/query";
import { WalletKeyResponse } from "./types/warden/warden/query";
import { QueryKeyRequestByIdResponse } from "./types/warden/warden/query";
import { KeyRequest } from "./types/warden/warden/key";
import { QueryKeyRequestsRequest } from "./types/warden/warden/query";
import { QueryKeysResponse } from "./types/warden/warden/query";
import { QuerySignTransactionRequestsRequest } from "./types/warden/warden/query";
import { QueryParamsRequest } from "./types/warden/warden/query";
import { QuerySpacesResponse } from "./types/warden/warden/query";
import { QueryKeysRequest } from "./types/warden/warden/query";
import { QuerySignTransactionRequestByIdRequest } from "./types/warden/warden/query";
import { KeychainFees } from "./types/warden/warden/keychain";
import { MsgNewSpaceResponse } from "./types/warden/warden/tx";
import { MsgAddKeychainParty } from "./types/warden/warden/tx";
import { MsgUpdateSpaceResponse } from "./types/warden/warden/tx";
import { MsgUpdateParams } from "./types/warden/warden/tx";
import { QuerySignatureRequestsRequest } from "./types/warden/warden/query";
import { QuerySignTransactionRequestByIdResponse } from "./types/warden/warden/query";
import { KeyResponse } from "./types/warden/warden/query";
import { QuerySignatureRequestByIdRequest } from "./types/warden/warden/query";
import { QuerySignTransactionRequestsResponse } from "./types/warden/warden/query";
import { MsgNewKeyRequest } from "./types/warden/warden/tx";
import { MsgUpdateKeyRequest } from "./types/warden/warden/tx";
import { MsgFulfilSignatureRequest } from "./types/warden/warden/tx";
import { QueryKeychainByAddressResponse } from "./types/warden/warden/query";
import { GenesisState } from "./types/warden/warden/genesis";
import { MsgAddKeychainPartyResponse } from "./types/warden/warden/tx";
import { MetadataEthereum } from "./types/warden/warden/tx";
import { MsgUpdateKeychain } from "./types/warden/warden/tx";
import { MsgNewKey } from "./types/warden/warden/tx";
import { MsgSignedData } from "./types/warden/warden/tx";
import { QuerySpacesByOwnerRequest } from "./types/warden/warden/query";
import { QuerySignatureRequestByIdResponse } from "./types/warden/warden/query";
import { Keychain } from "./types/warden/warden/keychain";
import { MsgRemoveSpaceOwner } from "./types/warden/warden/tx";
import { MsgUpdateKeychainResponse } from "./types/warden/warden/tx";
import { QueryParamsResponse } from "./types/warden/warden/query";
export { MsgNewSignTransactionRequest, MsgNewSignTransactionRequestResponse, SignTransactionRequestResponse, MsgNewSpace, MsgNewKeychain, MsgNewSignatureRequest, QueryKeychainsResponse, MsgNewSignatureRequestResponse, SignRequest, QueryKeychainsRequest, QuerySpaceByAddressRequest, Space, Params, MsgAddSpaceOwner, MsgNewKeyRequestResponse, QueryKeyRequestsResponse, QuerySignatureRequestsResponse, MsgUpdateKeyRequestResponse, QuerySpaceByAddressResponse, QueryKeychainByAddressRequest, MsgFulfilSignatureRequestResponse, SignTransactionRequest, Key, MsgUpdateParamsResponse, MsgAddSpaceOwnerResponse, MsgNewKeychainResponse, QuerySpacesRequest, MsgRemoveSpaceOwnerResponse, MsgUpdateSpace, QueryKeyRequestByIdRequest, WalletKeyResponse, QueryKeyRequestByIdResponse, KeyRequest, QueryKeyRequestsRequest, QueryKeysResponse, QuerySignTransactionRequestsRequest, QueryParamsRequest, QuerySpacesResponse, QueryKeysRequest, QuerySignTransactionRequestByIdRequest, KeychainFees, MsgNewSpaceResponse, MsgAddKeychainParty, MsgUpdateSpaceResponse, MsgUpdateParams, QuerySignatureRequestsRequest, QuerySignTransactionRequestByIdResponse, KeyResponse, QuerySignatureRequestByIdRequest, QuerySignTransactionRequestsResponse, MsgNewKeyRequest, MsgUpdateKeyRequest, MsgFulfilSignatureRequest, QueryKeychainByAddressResponse, GenesisState, MsgAddKeychainPartyResponse, MetadataEthereum, MsgUpdateKeychain, MsgNewKey, MsgSignedData, QuerySpacesByOwnerRequest, QuerySignatureRequestByIdResponse, Keychain, MsgRemoveSpaceOwner, MsgUpdateKeychainResponse, QueryParamsResponse };
type sendMsgNewSignTransactionRequestParams = {
    value: MsgNewSignTransactionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewSignTransactionRequestResponseParams = {
    value: MsgNewSignTransactionRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignTransactionRequestResponseParams = {
    value: SignTransactionRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewSpaceParams = {
    value: MsgNewSpace;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewKeychainParams = {
    value: MsgNewKeychain;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewSignatureRequestParams = {
    value: MsgNewSignatureRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeychainsResponseParams = {
    value: QueryKeychainsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewSignatureRequestResponseParams = {
    value: MsgNewSignatureRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignRequestParams = {
    value: SignRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeychainsRequestParams = {
    value: QueryKeychainsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpaceByAddressRequestParams = {
    value: QuerySpaceByAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSpaceParams = {
    value: Space;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAddSpaceOwnerParams = {
    value: MsgAddSpaceOwner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewKeyRequestResponseParams = {
    value: MsgNewKeyRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeyRequestsResponseParams = {
    value: QueryKeyRequestsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignatureRequestsResponseParams = {
    value: QuerySignatureRequestsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateKeyRequestResponseParams = {
    value: MsgUpdateKeyRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpaceByAddressResponseParams = {
    value: QuerySpaceByAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeychainByAddressRequestParams = {
    value: QueryKeychainByAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFulfilSignatureRequestResponseParams = {
    value: MsgFulfilSignatureRequestResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSignTransactionRequestParams = {
    value: SignTransactionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendKeyParams = {
    value: Key;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAddSpaceOwnerResponseParams = {
    value: MsgAddSpaceOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewKeychainResponseParams = {
    value: MsgNewKeychainResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpacesRequestParams = {
    value: QuerySpacesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRemoveSpaceOwnerResponseParams = {
    value: MsgRemoveSpaceOwnerResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSpaceParams = {
    value: MsgUpdateSpace;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeyRequestByIdRequestParams = {
    value: QueryKeyRequestByIdRequest;
    fee?: StdFee;
    memo?: string;
};
type sendWalletKeyResponseParams = {
    value: WalletKeyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeyRequestByIdResponseParams = {
    value: QueryKeyRequestByIdResponse;
    fee?: StdFee;
    memo?: string;
};
type sendKeyRequestParams = {
    value: KeyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeyRequestsRequestParams = {
    value: QueryKeyRequestsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeysResponseParams = {
    value: QueryKeysResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignTransactionRequestsRequestParams = {
    value: QuerySignTransactionRequestsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpacesResponseParams = {
    value: QuerySpacesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeysRequestParams = {
    value: QueryKeysRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignTransactionRequestByIdRequestParams = {
    value: QuerySignTransactionRequestByIdRequest;
    fee?: StdFee;
    memo?: string;
};
type sendKeychainFeesParams = {
    value: KeychainFees;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewSpaceResponseParams = {
    value: MsgNewSpaceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAddKeychainPartyParams = {
    value: MsgAddKeychainParty;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSpaceResponseParams = {
    value: MsgUpdateSpaceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignatureRequestsRequestParams = {
    value: QuerySignatureRequestsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignTransactionRequestByIdResponseParams = {
    value: QuerySignTransactionRequestByIdResponse;
    fee?: StdFee;
    memo?: string;
};
type sendKeyResponseParams = {
    value: KeyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignatureRequestByIdRequestParams = {
    value: QuerySignatureRequestByIdRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignTransactionRequestsResponseParams = {
    value: QuerySignTransactionRequestsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewKeyRequestParams = {
    value: MsgNewKeyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateKeyRequestParams = {
    value: MsgUpdateKeyRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFulfilSignatureRequestParams = {
    value: MsgFulfilSignatureRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryKeychainByAddressResponseParams = {
    value: QueryKeychainByAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAddKeychainPartyResponseParams = {
    value: MsgAddKeychainPartyResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMetadataEthereumParams = {
    value: MetadataEthereum;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateKeychainParams = {
    value: MsgUpdateKeychain;
    fee?: StdFee;
    memo?: string;
};
type sendMsgNewKeyParams = {
    value: MsgNewKey;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSignedDataParams = {
    value: MsgSignedData;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySpacesByOwnerRequestParams = {
    value: QuerySpacesByOwnerRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySignatureRequestByIdResponseParams = {
    value: QuerySignatureRequestByIdResponse;
    fee?: StdFee;
    memo?: string;
};
type sendKeychainParams = {
    value: Keychain;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRemoveSpaceOwnerParams = {
    value: MsgRemoveSpaceOwner;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateKeychainResponseParams = {
    value: MsgUpdateKeychainResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type msgNewSignTransactionRequestParams = {
    value: MsgNewSignTransactionRequest;
};
type msgNewSignTransactionRequestResponseParams = {
    value: MsgNewSignTransactionRequestResponse;
};
type signTransactionRequestResponseParams = {
    value: SignTransactionRequestResponse;
};
type msgNewSpaceParams = {
    value: MsgNewSpace;
};
type msgNewKeychainParams = {
    value: MsgNewKeychain;
};
type msgNewSignatureRequestParams = {
    value: MsgNewSignatureRequest;
};
type queryKeychainsResponseParams = {
    value: QueryKeychainsResponse;
};
type msgNewSignatureRequestResponseParams = {
    value: MsgNewSignatureRequestResponse;
};
type signRequestParams = {
    value: SignRequest;
};
type queryKeychainsRequestParams = {
    value: QueryKeychainsRequest;
};
type querySpaceByAddressRequestParams = {
    value: QuerySpaceByAddressRequest;
};
type spaceParams = {
    value: Space;
};
type paramsParams = {
    value: Params;
};
type msgAddSpaceOwnerParams = {
    value: MsgAddSpaceOwner;
};
type msgNewKeyRequestResponseParams = {
    value: MsgNewKeyRequestResponse;
};
type queryKeyRequestsResponseParams = {
    value: QueryKeyRequestsResponse;
};
type querySignatureRequestsResponseParams = {
    value: QuerySignatureRequestsResponse;
};
type msgUpdateKeyRequestResponseParams = {
    value: MsgUpdateKeyRequestResponse;
};
type querySpaceByAddressResponseParams = {
    value: QuerySpaceByAddressResponse;
};
type queryKeychainByAddressRequestParams = {
    value: QueryKeychainByAddressRequest;
};
type msgFulfilSignatureRequestResponseParams = {
    value: MsgFulfilSignatureRequestResponse;
};
type signTransactionRequestParams = {
    value: SignTransactionRequest;
};
type keyParams = {
    value: Key;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgAddSpaceOwnerResponseParams = {
    value: MsgAddSpaceOwnerResponse;
};
type msgNewKeychainResponseParams = {
    value: MsgNewKeychainResponse;
};
type querySpacesRequestParams = {
    value: QuerySpacesRequest;
};
type msgRemoveSpaceOwnerResponseParams = {
    value: MsgRemoveSpaceOwnerResponse;
};
type msgUpdateSpaceParams = {
    value: MsgUpdateSpace;
};
type queryKeyRequestByIdRequestParams = {
    value: QueryKeyRequestByIdRequest;
};
type walletKeyResponseParams = {
    value: WalletKeyResponse;
};
type queryKeyRequestByIdResponseParams = {
    value: QueryKeyRequestByIdResponse;
};
type keyRequestParams = {
    value: KeyRequest;
};
type queryKeyRequestsRequestParams = {
    value: QueryKeyRequestsRequest;
};
type queryKeysResponseParams = {
    value: QueryKeysResponse;
};
type querySignTransactionRequestsRequestParams = {
    value: QuerySignTransactionRequestsRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type querySpacesResponseParams = {
    value: QuerySpacesResponse;
};
type queryKeysRequestParams = {
    value: QueryKeysRequest;
};
type querySignTransactionRequestByIdRequestParams = {
    value: QuerySignTransactionRequestByIdRequest;
};
type keychainFeesParams = {
    value: KeychainFees;
};
type msgNewSpaceResponseParams = {
    value: MsgNewSpaceResponse;
};
type msgAddKeychainPartyParams = {
    value: MsgAddKeychainParty;
};
type msgUpdateSpaceResponseParams = {
    value: MsgUpdateSpaceResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type querySignatureRequestsRequestParams = {
    value: QuerySignatureRequestsRequest;
};
type querySignTransactionRequestByIdResponseParams = {
    value: QuerySignTransactionRequestByIdResponse;
};
type keyResponseParams = {
    value: KeyResponse;
};
type querySignatureRequestByIdRequestParams = {
    value: QuerySignatureRequestByIdRequest;
};
type querySignTransactionRequestsResponseParams = {
    value: QuerySignTransactionRequestsResponse;
};
type msgNewKeyRequestParams = {
    value: MsgNewKeyRequest;
};
type msgUpdateKeyRequestParams = {
    value: MsgUpdateKeyRequest;
};
type msgFulfilSignatureRequestParams = {
    value: MsgFulfilSignatureRequest;
};
type queryKeychainByAddressResponseParams = {
    value: QueryKeychainByAddressResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgAddKeychainPartyResponseParams = {
    value: MsgAddKeychainPartyResponse;
};
type metadataEthereumParams = {
    value: MetadataEthereum;
};
type msgUpdateKeychainParams = {
    value: MsgUpdateKeychain;
};
type msgNewKeyParams = {
    value: MsgNewKey;
};
type msgSignedDataParams = {
    value: MsgSignedData;
};
type querySpacesByOwnerRequestParams = {
    value: QuerySpacesByOwnerRequest;
};
type querySignatureRequestByIdResponseParams = {
    value: QuerySignatureRequestByIdResponse;
};
type keychainParams = {
    value: Keychain;
};
type msgRemoveSpaceOwnerParams = {
    value: MsgRemoveSpaceOwner;
};
type msgUpdateKeychainResponseParams = {
    value: MsgUpdateKeychainResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgNewSignTransactionRequest({ value, fee, memo }: sendMsgNewSignTransactionRequestParams): Promise<DeliverTxResponse>;
    sendMsgNewSignTransactionRequestResponse({ value, fee, memo }: sendMsgNewSignTransactionRequestResponseParams): Promise<DeliverTxResponse>;
    sendSignTransactionRequestResponse({ value, fee, memo }: sendSignTransactionRequestResponseParams): Promise<DeliverTxResponse>;
    sendMsgNewSpace({ value, fee, memo }: sendMsgNewSpaceParams): Promise<DeliverTxResponse>;
    sendMsgNewKeychain({ value, fee, memo }: sendMsgNewKeychainParams): Promise<DeliverTxResponse>;
    sendMsgNewSignatureRequest({ value, fee, memo }: sendMsgNewSignatureRequestParams): Promise<DeliverTxResponse>;
    sendQueryKeychainsResponse({ value, fee, memo }: sendQueryKeychainsResponseParams): Promise<DeliverTxResponse>;
    sendMsgNewSignatureRequestResponse({ value, fee, memo }: sendMsgNewSignatureRequestResponseParams): Promise<DeliverTxResponse>;
    sendSignRequest({ value, fee, memo }: sendSignRequestParams): Promise<DeliverTxResponse>;
    sendQueryKeychainsRequest({ value, fee, memo }: sendQueryKeychainsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpaceByAddressRequest({ value, fee, memo }: sendQuerySpaceByAddressRequestParams): Promise<DeliverTxResponse>;
    sendSpace({ value, fee, memo }: sendSpaceParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgAddSpaceOwner({ value, fee, memo }: sendMsgAddSpaceOwnerParams): Promise<DeliverTxResponse>;
    sendMsgNewKeyRequestResponse({ value, fee, memo }: sendMsgNewKeyRequestResponseParams): Promise<DeliverTxResponse>;
    sendQueryKeyRequestsResponse({ value, fee, memo }: sendQueryKeyRequestsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySignatureRequestsResponse({ value, fee, memo }: sendQuerySignatureRequestsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateKeyRequestResponse({ value, fee, memo }: sendMsgUpdateKeyRequestResponseParams): Promise<DeliverTxResponse>;
    sendQuerySpaceByAddressResponse({ value, fee, memo }: sendQuerySpaceByAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryKeychainByAddressRequest({ value, fee, memo }: sendQueryKeychainByAddressRequestParams): Promise<DeliverTxResponse>;
    sendMsgFulfilSignatureRequestResponse({ value, fee, memo }: sendMsgFulfilSignatureRequestResponseParams): Promise<DeliverTxResponse>;
    sendSignTransactionRequest({ value, fee, memo }: sendSignTransactionRequestParams): Promise<DeliverTxResponse>;
    sendKey({ value, fee, memo }: sendKeyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgAddSpaceOwnerResponse({ value, fee, memo }: sendMsgAddSpaceOwnerResponseParams): Promise<DeliverTxResponse>;
    sendMsgNewKeychainResponse({ value, fee, memo }: sendMsgNewKeychainResponseParams): Promise<DeliverTxResponse>;
    sendQuerySpacesRequest({ value, fee, memo }: sendQuerySpacesRequestParams): Promise<DeliverTxResponse>;
    sendMsgRemoveSpaceOwnerResponse({ value, fee, memo }: sendMsgRemoveSpaceOwnerResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSpace({ value, fee, memo }: sendMsgUpdateSpaceParams): Promise<DeliverTxResponse>;
    sendQueryKeyRequestByIdRequest({ value, fee, memo }: sendQueryKeyRequestByIdRequestParams): Promise<DeliverTxResponse>;
    sendWalletKeyResponse({ value, fee, memo }: sendWalletKeyResponseParams): Promise<DeliverTxResponse>;
    sendQueryKeyRequestByIdResponse({ value, fee, memo }: sendQueryKeyRequestByIdResponseParams): Promise<DeliverTxResponse>;
    sendKeyRequest({ value, fee, memo }: sendKeyRequestParams): Promise<DeliverTxResponse>;
    sendQueryKeyRequestsRequest({ value, fee, memo }: sendQueryKeyRequestsRequestParams): Promise<DeliverTxResponse>;
    sendQueryKeysResponse({ value, fee, memo }: sendQueryKeysResponseParams): Promise<DeliverTxResponse>;
    sendQuerySignTransactionRequestsRequest({ value, fee, memo }: sendQuerySignTransactionRequestsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySpacesResponse({ value, fee, memo }: sendQuerySpacesResponseParams): Promise<DeliverTxResponse>;
    sendQueryKeysRequest({ value, fee, memo }: sendQueryKeysRequestParams): Promise<DeliverTxResponse>;
    sendQuerySignTransactionRequestByIdRequest({ value, fee, memo }: sendQuerySignTransactionRequestByIdRequestParams): Promise<DeliverTxResponse>;
    sendKeychainFees({ value, fee, memo }: sendKeychainFeesParams): Promise<DeliverTxResponse>;
    sendMsgNewSpaceResponse({ value, fee, memo }: sendMsgNewSpaceResponseParams): Promise<DeliverTxResponse>;
    sendMsgAddKeychainParty({ value, fee, memo }: sendMsgAddKeychainPartyParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSpaceResponse({ value, fee, memo }: sendMsgUpdateSpaceResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQuerySignatureRequestsRequest({ value, fee, memo }: sendQuerySignatureRequestsRequestParams): Promise<DeliverTxResponse>;
    sendQuerySignTransactionRequestByIdResponse({ value, fee, memo }: sendQuerySignTransactionRequestByIdResponseParams): Promise<DeliverTxResponse>;
    sendKeyResponse({ value, fee, memo }: sendKeyResponseParams): Promise<DeliverTxResponse>;
    sendQuerySignatureRequestByIdRequest({ value, fee, memo }: sendQuerySignatureRequestByIdRequestParams): Promise<DeliverTxResponse>;
    sendQuerySignTransactionRequestsResponse({ value, fee, memo }: sendQuerySignTransactionRequestsResponseParams): Promise<DeliverTxResponse>;
    sendMsgNewKeyRequest({ value, fee, memo }: sendMsgNewKeyRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateKeyRequest({ value, fee, memo }: sendMsgUpdateKeyRequestParams): Promise<DeliverTxResponse>;
    sendMsgFulfilSignatureRequest({ value, fee, memo }: sendMsgFulfilSignatureRequestParams): Promise<DeliverTxResponse>;
    sendQueryKeychainByAddressResponse({ value, fee, memo }: sendQueryKeychainByAddressResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgAddKeychainPartyResponse({ value, fee, memo }: sendMsgAddKeychainPartyResponseParams): Promise<DeliverTxResponse>;
    sendMetadataEthereum({ value, fee, memo }: sendMetadataEthereumParams): Promise<DeliverTxResponse>;
    sendMsgUpdateKeychain({ value, fee, memo }: sendMsgUpdateKeychainParams): Promise<DeliverTxResponse>;
    sendMsgNewKey({ value, fee, memo }: sendMsgNewKeyParams): Promise<DeliverTxResponse>;
    sendMsgSignedData({ value, fee, memo }: sendMsgSignedDataParams): Promise<DeliverTxResponse>;
    sendQuerySpacesByOwnerRequest({ value, fee, memo }: sendQuerySpacesByOwnerRequestParams): Promise<DeliverTxResponse>;
    sendQuerySignatureRequestByIdResponse({ value, fee, memo }: sendQuerySignatureRequestByIdResponseParams): Promise<DeliverTxResponse>;
    sendKeychain({ value, fee, memo }: sendKeychainParams): Promise<DeliverTxResponse>;
    sendMsgRemoveSpaceOwner({ value, fee, memo }: sendMsgRemoveSpaceOwnerParams): Promise<DeliverTxResponse>;
    sendMsgUpdateKeychainResponse({ value, fee, memo }: sendMsgUpdateKeychainResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    msgNewSignTransactionRequest({ value }: msgNewSignTransactionRequestParams): EncodeObject;
    msgNewSignTransactionRequestResponse({ value }: msgNewSignTransactionRequestResponseParams): EncodeObject;
    signTransactionRequestResponse({ value }: signTransactionRequestResponseParams): EncodeObject;
    msgNewSpace({ value }: msgNewSpaceParams): EncodeObject;
    msgNewKeychain({ value }: msgNewKeychainParams): EncodeObject;
    msgNewSignatureRequest({ value }: msgNewSignatureRequestParams): EncodeObject;
    queryKeychainsResponse({ value }: queryKeychainsResponseParams): EncodeObject;
    msgNewSignatureRequestResponse({ value }: msgNewSignatureRequestResponseParams): EncodeObject;
    signRequest({ value }: signRequestParams): EncodeObject;
    queryKeychainsRequest({ value }: queryKeychainsRequestParams): EncodeObject;
    querySpaceByAddressRequest({ value }: querySpaceByAddressRequestParams): EncodeObject;
    space({ value }: spaceParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgAddSpaceOwner({ value }: msgAddSpaceOwnerParams): EncodeObject;
    msgNewKeyRequestResponse({ value }: msgNewKeyRequestResponseParams): EncodeObject;
    queryKeyRequestsResponse({ value }: queryKeyRequestsResponseParams): EncodeObject;
    querySignatureRequestsResponse({ value }: querySignatureRequestsResponseParams): EncodeObject;
    msgUpdateKeyRequestResponse({ value }: msgUpdateKeyRequestResponseParams): EncodeObject;
    querySpaceByAddressResponse({ value }: querySpaceByAddressResponseParams): EncodeObject;
    queryKeychainByAddressRequest({ value }: queryKeychainByAddressRequestParams): EncodeObject;
    msgFulfilSignatureRequestResponse({ value }: msgFulfilSignatureRequestResponseParams): EncodeObject;
    signTransactionRequest({ value }: signTransactionRequestParams): EncodeObject;
    key({ value }: keyParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgAddSpaceOwnerResponse({ value }: msgAddSpaceOwnerResponseParams): EncodeObject;
    msgNewKeychainResponse({ value }: msgNewKeychainResponseParams): EncodeObject;
    querySpacesRequest({ value }: querySpacesRequestParams): EncodeObject;
    msgRemoveSpaceOwnerResponse({ value }: msgRemoveSpaceOwnerResponseParams): EncodeObject;
    msgUpdateSpace({ value }: msgUpdateSpaceParams): EncodeObject;
    queryKeyRequestByIdRequest({ value }: queryKeyRequestByIdRequestParams): EncodeObject;
    walletKeyResponse({ value }: walletKeyResponseParams): EncodeObject;
    queryKeyRequestByIdResponse({ value }: queryKeyRequestByIdResponseParams): EncodeObject;
    keyRequest({ value }: keyRequestParams): EncodeObject;
    queryKeyRequestsRequest({ value }: queryKeyRequestsRequestParams): EncodeObject;
    queryKeysResponse({ value }: queryKeysResponseParams): EncodeObject;
    querySignTransactionRequestsRequest({ value }: querySignTransactionRequestsRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    querySpacesResponse({ value }: querySpacesResponseParams): EncodeObject;
    queryKeysRequest({ value }: queryKeysRequestParams): EncodeObject;
    querySignTransactionRequestByIdRequest({ value }: querySignTransactionRequestByIdRequestParams): EncodeObject;
    keychainFees({ value }: keychainFeesParams): EncodeObject;
    msgNewSpaceResponse({ value }: msgNewSpaceResponseParams): EncodeObject;
    msgAddKeychainParty({ value }: msgAddKeychainPartyParams): EncodeObject;
    msgUpdateSpaceResponse({ value }: msgUpdateSpaceResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    querySignatureRequestsRequest({ value }: querySignatureRequestsRequestParams): EncodeObject;
    querySignTransactionRequestByIdResponse({ value }: querySignTransactionRequestByIdResponseParams): EncodeObject;
    keyResponse({ value }: keyResponseParams): EncodeObject;
    querySignatureRequestByIdRequest({ value }: querySignatureRequestByIdRequestParams): EncodeObject;
    querySignTransactionRequestsResponse({ value }: querySignTransactionRequestsResponseParams): EncodeObject;
    msgNewKeyRequest({ value }: msgNewKeyRequestParams): EncodeObject;
    msgUpdateKeyRequest({ value }: msgUpdateKeyRequestParams): EncodeObject;
    msgFulfilSignatureRequest({ value }: msgFulfilSignatureRequestParams): EncodeObject;
    queryKeychainByAddressResponse({ value }: queryKeychainByAddressResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgAddKeychainPartyResponse({ value }: msgAddKeychainPartyResponseParams): EncodeObject;
    metadataEthereum({ value }: metadataEthereumParams): EncodeObject;
    msgUpdateKeychain({ value }: msgUpdateKeychainParams): EncodeObject;
    msgNewKey({ value }: msgNewKeyParams): EncodeObject;
    msgSignedData({ value }: msgSignedDataParams): EncodeObject;
    querySpacesByOwnerRequest({ value }: querySpacesByOwnerRequestParams): EncodeObject;
    querySignatureRequestByIdResponse({ value }: querySignatureRequestByIdResponseParams): EncodeObject;
    keychain({ value }: keychainParams): EncodeObject;
    msgRemoveSpaceOwner({ value }: msgRemoveSpaceOwnerParams): EncodeObject;
    msgUpdateKeychainResponse({ value }: msgUpdateKeychainResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
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
        WardenWarden: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
