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
const msgTypes = [
    ["/warden.warden.MsgNewSignTransactionRequest", MsgNewSignTransactionRequest],
    ["/warden.warden.MsgNewSignTransactionRequestResponse", MsgNewSignTransactionRequestResponse],
    ["/warden.warden.SignTransactionRequestResponse", SignTransactionRequestResponse],
    ["/warden.warden.MsgNewSpace", MsgNewSpace],
    ["/warden.warden.MsgNewKeychain", MsgNewKeychain],
    ["/warden.warden.MsgNewSignatureRequest", MsgNewSignatureRequest],
    ["/warden.warden.QueryKeychainsResponse", QueryKeychainsResponse],
    ["/warden.warden.MsgNewSignatureRequestResponse", MsgNewSignatureRequestResponse],
    ["/warden.warden.SignRequest", SignRequest],
    ["/warden.warden.QueryKeychainsRequest", QueryKeychainsRequest],
    ["/warden.warden.QuerySpaceByAddressRequest", QuerySpaceByAddressRequest],
    ["/warden.warden.Space", Space],
    ["/warden.warden.Params", Params],
    ["/warden.warden.MsgAddSpaceOwner", MsgAddSpaceOwner],
    ["/warden.warden.MsgNewKeyRequestResponse", MsgNewKeyRequestResponse],
    ["/warden.warden.QueryKeyRequestsResponse", QueryKeyRequestsResponse],
    ["/warden.warden.QuerySignatureRequestsResponse", QuerySignatureRequestsResponse],
    ["/warden.warden.MsgUpdateKeyRequestResponse", MsgUpdateKeyRequestResponse],
    ["/warden.warden.QuerySpaceByAddressResponse", QuerySpaceByAddressResponse],
    ["/warden.warden.QueryKeychainByAddressRequest", QueryKeychainByAddressRequest],
    ["/warden.warden.MsgFulfilSignatureRequestResponse", MsgFulfilSignatureRequestResponse],
    ["/warden.warden.SignTransactionRequest", SignTransactionRequest],
    ["/warden.warden.Key", Key],
    ["/warden.warden.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/warden.warden.MsgAddSpaceOwnerResponse", MsgAddSpaceOwnerResponse],
    ["/warden.warden.MsgNewKeychainResponse", MsgNewKeychainResponse],
    ["/warden.warden.QuerySpacesRequest", QuerySpacesRequest],
    ["/warden.warden.MsgRemoveSpaceOwnerResponse", MsgRemoveSpaceOwnerResponse],
    ["/warden.warden.MsgUpdateSpace", MsgUpdateSpace],
    ["/warden.warden.QueryKeyRequestByIdRequest", QueryKeyRequestByIdRequest],
    ["/warden.warden.WalletKeyResponse", WalletKeyResponse],
    ["/warden.warden.QueryKeyRequestByIdResponse", QueryKeyRequestByIdResponse],
    ["/warden.warden.KeyRequest", KeyRequest],
    ["/warden.warden.QueryKeyRequestsRequest", QueryKeyRequestsRequest],
    ["/warden.warden.QueryKeysResponse", QueryKeysResponse],
    ["/warden.warden.QuerySignTransactionRequestsRequest", QuerySignTransactionRequestsRequest],
    ["/warden.warden.QueryParamsRequest", QueryParamsRequest],
    ["/warden.warden.QuerySpacesResponse", QuerySpacesResponse],
    ["/warden.warden.QueryKeysRequest", QueryKeysRequest],
    ["/warden.warden.QuerySignTransactionRequestByIdRequest", QuerySignTransactionRequestByIdRequest],
    ["/warden.warden.KeychainFees", KeychainFees],
    ["/warden.warden.MsgNewSpaceResponse", MsgNewSpaceResponse],
    ["/warden.warden.MsgAddKeychainParty", MsgAddKeychainParty],
    ["/warden.warden.MsgUpdateSpaceResponse", MsgUpdateSpaceResponse],
    ["/warden.warden.MsgUpdateParams", MsgUpdateParams],
    ["/warden.warden.QuerySignatureRequestsRequest", QuerySignatureRequestsRequest],
    ["/warden.warden.QuerySignTransactionRequestByIdResponse", QuerySignTransactionRequestByIdResponse],
    ["/warden.warden.KeyResponse", KeyResponse],
    ["/warden.warden.QuerySignatureRequestByIdRequest", QuerySignatureRequestByIdRequest],
    ["/warden.warden.QuerySignTransactionRequestsResponse", QuerySignTransactionRequestsResponse],
    ["/warden.warden.MsgNewKeyRequest", MsgNewKeyRequest],
    ["/warden.warden.MsgUpdateKeyRequest", MsgUpdateKeyRequest],
    ["/warden.warden.MsgFulfilSignatureRequest", MsgFulfilSignatureRequest],
    ["/warden.warden.QueryKeychainByAddressResponse", QueryKeychainByAddressResponse],
    ["/warden.warden.GenesisState", GenesisState],
    ["/warden.warden.MsgAddKeychainPartyResponse", MsgAddKeychainPartyResponse],
    ["/warden.warden.MetadataEthereum", MetadataEthereum],
    ["/warden.warden.MsgUpdateKeychain", MsgUpdateKeychain],
    ["/warden.warden.MsgNewKey", MsgNewKey],
    ["/warden.warden.MsgSignedData", MsgSignedData],
    ["/warden.warden.QuerySpacesByOwnerRequest", QuerySpacesByOwnerRequest],
    ["/warden.warden.QuerySignatureRequestByIdResponse", QuerySignatureRequestByIdResponse],
    ["/warden.warden.Keychain", Keychain],
    ["/warden.warden.MsgRemoveSpaceOwner", MsgRemoveSpaceOwner],
    ["/warden.warden.MsgUpdateKeychainResponse", MsgUpdateKeychainResponse],
    ["/warden.warden.QueryParamsResponse", QueryParamsResponse],
];
export { msgTypes };
