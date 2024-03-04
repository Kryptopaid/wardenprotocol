import { GeneratedType } from "@cosmjs/proto-signing";
import { Action } from "./types/warden/intent/action";
import { Params } from "./types/warden/intent/params";
import { MsgNewIntentResponse } from "./types/warden/intent/tx";
import { QueryActionsRequest } from "./types/warden/intent/query";
import { QueryActionsResponse } from "./types/warden/intent/query";
import { Approver } from "./types/warden/intent/action";
import { MsgActionCreated } from "./types/warden/intent/action";
import { QueryActionsByAddressRequest } from "./types/warden/intent/query";
import { QueryActionByIdRequest } from "./types/warden/intent/query";
import { MsgUpdateParams } from "./types/warden/intent/tx";
import { QueryParamsRequest } from "./types/warden/intent/query";
import { QueryParamsResponse } from "./types/warden/intent/query";
import { QueryIntentsResponse } from "./types/warden/intent/query";
import { QueryActionsByAddressResponse } from "./types/warden/intent/query";
import { MsgRevokeAction } from "./types/warden/intent/tx";
import { MsgRevokeActionResponse } from "./types/warden/intent/tx";
import { QueryIntentByIdRequest } from "./types/warden/intent/query";
import { MsgApproveActionResponse } from "./types/warden/intent/tx";
import { MsgNewIntent } from "./types/warden/intent/tx";
import { Intent } from "./types/warden/intent/intent";
import { QueryIntentByIdResponse } from "./types/warden/intent/query";
import { MsgApproveAction } from "./types/warden/intent/tx";
import { GenesisState } from "./types/warden/intent/genesis";
import { QueryIntentsRequest } from "./types/warden/intent/query";
import { QueryActionByIdResponse } from "./types/warden/intent/query";
import { MsgUpdateParamsResponse } from "./types/warden/intent/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/warden.intent.Action", Action],
    ["/warden.intent.Params", Params],
    ["/warden.intent.MsgNewIntentResponse", MsgNewIntentResponse],
    ["/warden.intent.QueryActionsRequest", QueryActionsRequest],
    ["/warden.intent.QueryActionsResponse", QueryActionsResponse],
    ["/warden.intent.Approver", Approver],
    ["/warden.intent.MsgActionCreated", MsgActionCreated],
    ["/warden.intent.QueryActionsByAddressRequest", QueryActionsByAddressRequest],
    ["/warden.intent.QueryActionByIdRequest", QueryActionByIdRequest],
    ["/warden.intent.MsgUpdateParams", MsgUpdateParams],
    ["/warden.intent.QueryParamsRequest", QueryParamsRequest],
    ["/warden.intent.QueryParamsResponse", QueryParamsResponse],
    ["/warden.intent.QueryIntentsResponse", QueryIntentsResponse],
    ["/warden.intent.QueryActionsByAddressResponse", QueryActionsByAddressResponse],
    ["/warden.intent.MsgRevokeAction", MsgRevokeAction],
    ["/warden.intent.MsgRevokeActionResponse", MsgRevokeActionResponse],
    ["/warden.intent.QueryIntentByIdRequest", QueryIntentByIdRequest],
    ["/warden.intent.MsgApproveActionResponse", MsgApproveActionResponse],
    ["/warden.intent.MsgNewIntent", MsgNewIntent],
    ["/warden.intent.Intent", Intent],
    ["/warden.intent.QueryIntentByIdResponse", QueryIntentByIdResponse],
    ["/warden.intent.MsgApproveAction", MsgApproveAction],
    ["/warden.intent.GenesisState", GenesisState],
    ["/warden.intent.QueryIntentsRequest", QueryIntentsRequest],
    ["/warden.intent.QueryActionByIdResponse", QueryActionByIdResponse],
    ["/warden.intent.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }