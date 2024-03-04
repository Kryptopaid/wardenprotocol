import { Intent } from "./types/warden/intent/intent";
import { MsgNewIntentResponse } from "./types/warden/intent/tx";
import { QueryActionByIdRequest } from "./types/warden/intent/query";
import { QueryIntentByIdRequest } from "./types/warden/intent/query";
import { MsgNewIntent } from "./types/warden/intent/tx";
import { QueryActionsRequest } from "./types/warden/intent/query";
import { QueryActionsByAddressRequest } from "./types/warden/intent/query";
import { MsgUpdateParams } from "./types/warden/intent/tx";
import { MsgUpdateParamsResponse } from "./types/warden/intent/tx";
import { MsgApproveActionResponse } from "./types/warden/intent/tx";
import { GenesisState } from "./types/warden/intent/genesis";
import { QueryActionsResponse } from "./types/warden/intent/query";
import { Action } from "./types/warden/intent/action";
import { QueryActionByIdResponse } from "./types/warden/intent/query";
import { QueryParamsRequest } from "./types/warden/intent/query";
import { QueryIntentByIdResponse } from "./types/warden/intent/query";
import { QueryActionsByAddressResponse } from "./types/warden/intent/query";
import { Approver } from "./types/warden/intent/action";
import { MsgApproveAction } from "./types/warden/intent/tx";
import { QueryParamsResponse } from "./types/warden/intent/query";
import { QueryIntentsResponse } from "./types/warden/intent/query";
import { MsgActionCreated } from "./types/warden/intent/action";
import { MsgRevokeAction } from "./types/warden/intent/tx";
import { MsgRevokeActionResponse } from "./types/warden/intent/tx";
import { Params } from "./types/warden/intent/params";
import { QueryIntentsRequest } from "./types/warden/intent/query";
const msgTypes = [
    ["/warden.intent.Intent", Intent],
    ["/warden.intent.MsgNewIntentResponse", MsgNewIntentResponse],
    ["/warden.intent.QueryActionByIdRequest", QueryActionByIdRequest],
    ["/warden.intent.QueryIntentByIdRequest", QueryIntentByIdRequest],
    ["/warden.intent.MsgNewIntent", MsgNewIntent],
    ["/warden.intent.QueryActionsRequest", QueryActionsRequest],
    ["/warden.intent.QueryActionsByAddressRequest", QueryActionsByAddressRequest],
    ["/warden.intent.MsgUpdateParams", MsgUpdateParams],
    ["/warden.intent.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/warden.intent.MsgApproveActionResponse", MsgApproveActionResponse],
    ["/warden.intent.GenesisState", GenesisState],
    ["/warden.intent.QueryActionsResponse", QueryActionsResponse],
    ["/warden.intent.Action", Action],
    ["/warden.intent.QueryActionByIdResponse", QueryActionByIdResponse],
    ["/warden.intent.QueryParamsRequest", QueryParamsRequest],
    ["/warden.intent.QueryIntentByIdResponse", QueryIntentByIdResponse],
    ["/warden.intent.QueryActionsByAddressResponse", QueryActionsByAddressResponse],
    ["/warden.intent.Approver", Approver],
    ["/warden.intent.MsgApproveAction", MsgApproveAction],
    ["/warden.intent.QueryParamsResponse", QueryParamsResponse],
    ["/warden.intent.QueryIntentsResponse", QueryIntentsResponse],
    ["/warden.intent.MsgActionCreated", MsgActionCreated],
    ["/warden.intent.MsgRevokeAction", MsgRevokeAction],
    ["/warden.intent.MsgRevokeActionResponse", MsgRevokeActionResponse],
    ["/warden.intent.Params", Params],
    ["/warden.intent.QueryIntentsRequest", QueryIntentsRequest],
];
export { msgTypes };
