import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryAllEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
import { MsgSubmitEvidenceResponse } from "./types/cosmos/evidence/v1beta1/tx";
import { Equivocation } from "./types/cosmos/evidence/v1beta1/evidence";
import { QueryEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
import { QueryAllEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";
import { GenesisState } from "./types/cosmos/evidence/v1beta1/genesis";
import { MsgSubmitEvidence } from "./types/cosmos/evidence/v1beta1/tx";
import { QueryEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";
export { QueryAllEvidenceResponse, MsgSubmitEvidenceResponse, Equivocation, QueryEvidenceResponse, QueryAllEvidenceRequest, GenesisState, MsgSubmitEvidence, QueryEvidenceRequest };
type sendQueryAllEvidenceResponseParams = {
    value: QueryAllEvidenceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitEvidenceResponseParams = {
    value: MsgSubmitEvidenceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendEquivocationParams = {
    value: Equivocation;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEvidenceResponseParams = {
    value: QueryEvidenceResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllEvidenceRequestParams = {
    value: QueryAllEvidenceRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSubmitEvidenceParams = {
    value: MsgSubmitEvidence;
    fee?: StdFee;
    memo?: string;
};
type sendQueryEvidenceRequestParams = {
    value: QueryEvidenceRequest;
    fee?: StdFee;
    memo?: string;
};
type queryAllEvidenceResponseParams = {
    value: QueryAllEvidenceResponse;
};
type msgSubmitEvidenceResponseParams = {
    value: MsgSubmitEvidenceResponse;
};
type equivocationParams = {
    value: Equivocation;
};
type queryEvidenceResponseParams = {
    value: QueryEvidenceResponse;
};
type queryAllEvidenceRequestParams = {
    value: QueryAllEvidenceRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgSubmitEvidenceParams = {
    value: MsgSubmitEvidence;
};
type queryEvidenceRequestParams = {
    value: QueryEvidenceRequest;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryAllEvidenceResponse({ value, fee, memo }: sendQueryAllEvidenceResponseParams): Promise<DeliverTxResponse>;
    sendMsgSubmitEvidenceResponse({ value, fee, memo }: sendMsgSubmitEvidenceResponseParams): Promise<DeliverTxResponse>;
    sendEquivocation({ value, fee, memo }: sendEquivocationParams): Promise<DeliverTxResponse>;
    sendQueryEvidenceResponse({ value, fee, memo }: sendQueryEvidenceResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllEvidenceRequest({ value, fee, memo }: sendQueryAllEvidenceRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgSubmitEvidence({ value, fee, memo }: sendMsgSubmitEvidenceParams): Promise<DeliverTxResponse>;
    sendQueryEvidenceRequest({ value, fee, memo }: sendQueryEvidenceRequestParams): Promise<DeliverTxResponse>;
    queryAllEvidenceResponse({ value }: queryAllEvidenceResponseParams): EncodeObject;
    msgSubmitEvidenceResponse({ value }: msgSubmitEvidenceResponseParams): EncodeObject;
    equivocation({ value }: equivocationParams): EncodeObject;
    queryEvidenceResponse({ value }: queryEvidenceResponseParams): EncodeObject;
    queryAllEvidenceRequest({ value }: queryAllEvidenceRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgSubmitEvidence({ value }: msgSubmitEvidenceParams): EncodeObject;
    queryEvidenceRequest({ value }: queryEvidenceRequestParams): EncodeObject;
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
        CosmosEvidenceV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
