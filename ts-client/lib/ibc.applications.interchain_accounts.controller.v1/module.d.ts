import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
export { QueryParamsResponse, MsgSendTxResponse, MsgSendTx, QueryInterchainAccountRequest, QueryParamsRequest, MsgUpdateParamsResponse, MsgRegisterInterchainAccount, MsgUpdateParams, Params, QueryInterchainAccountResponse, MsgRegisterInterchainAccountResponse };
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxResponseParams = {
    value: MsgSendTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxParams = {
    value: MsgSendTx;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type msgSendTxResponseParams = {
    value: MsgSendTxResponse;
};
type msgSendTxParams = {
    value: MsgSendTx;
};
type queryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type paramsParams = {
    value: Params;
};
type queryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
};
type msgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendTxResponse({ value, fee, memo }: sendMsgSendTxResponseParams): Promise<DeliverTxResponse>;
    sendMsgSendTx({ value, fee, memo }: sendMsgSendTxParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountRequest({ value, fee, memo }: sendQueryInterchainAccountRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccount({ value, fee, memo }: sendMsgRegisterInterchainAccountParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountResponse({ value, fee, memo }: sendQueryInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: sendMsgRegisterInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    msgSendTxResponse({ value }: msgSendTxResponseParams): EncodeObject;
    msgSendTx({ value }: msgSendTxParams): EncodeObject;
    queryInterchainAccountRequest({ value }: queryInterchainAccountRequestParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRegisterInterchainAccount({ value }: msgRegisterInterchainAccountParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryInterchainAccountResponse({ value }: queryInterchainAccountResponseParams): EncodeObject;
    msgRegisterInterchainAccountResponse({ value }: msgRegisterInterchainAccountResponseParams): EncodeObject;
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
        IbcApplicationsInterchainAccountsControllerV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
