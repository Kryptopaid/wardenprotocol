import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgNewKeychain } from "./types/warden/warden/tx";
import { Params } from "./types/warden/warden/params";
import { MsgUpdateParamsResponse } from "./types/warden/warden/tx";
import { QueryKeyRequestByIdRequest } from "./types/warden/warden/query";
import { QueryKeysRequest } from "./types/warden/warden/query";
import { WalletKeyResponse } from "./types/warden/warden/query";
import { MsgNewSpaceResponse } from "./types/warden/warden/tx";
import { SignTransactionRequest } from "./types/warden/warden/signature";
import { QuerySpaceByAddressRequest } from "./types/warden/warden/query";
import { QueryKeyRequestsResponse } from "./types/warden/warden/query";
import { QuerySignatureRequestsRequest } from "./types/warden/warden/query";
import { QuerySignTransactionRequestByIdRequest } from "./types/warden/warden/query";
import { MsgUpdateSpaceResponse } from "./types/warden/warden/tx";
import { GenesisState } from "./types/warden/warden/genesis";
import { SignRequest } from "./types/warden/warden/signature";
import { QueryKeychainByAddressResponse } from "./types/warden/warden/query";
import { QueryKeychainsResponse } from "./types/warden/warden/query";
import { QuerySignatureRequestByIdResponse } from "./types/warden/warden/query";
import { SignTransactionRequestResponse } from "./types/warden/warden/query";
import { MsgRemoveSpaceOwnerResponse } from "./types/warden/warden/tx";
import { QuerySpacesRequest } from "./types/warden/warden/query";
import { QueryKeychainByAddressRequest } from "./types/warden/warden/query";
import { MsgUpdateKeyRequestResponse } from "./types/warden/warden/tx";
import { QueryParamsRequest } from "./types/warden/warden/query";
import { MsgUpdateKeyRequest } from "./types/warden/warden/tx";
import { QuerySignTransactionRequestsResponse } from "./types/warden/warden/query";
import { MsgAddSpaceOwnerResponse } from "./types/warden/warden/tx";
import { MsgRemoveSpaceOwner } from "./types/warden/warden/tx";
import { MsgSignedData } from "./types/warden/warden/tx";
import { MsgNewSpace } from "./types/warden/warden/tx";
import { QuerySpacesByOwnerRequest } from "./types/warden/warden/query";
import { QuerySignTransactionRequestByIdResponse } from "./types/warden/warden/query";
import { MsgAddKeychainParty } from "./types/warden/warden/tx";
import { QuerySpacesResponse } from "./types/warden/warden/query";
import { QueryKeyRequestByIdResponse } from "./types/warden/warden/query";
import { QueryKeysResponse } from "./types/warden/warden/query";
import { QuerySignatureRequestByIdRequest } from "./types/warden/warden/query";
import { MsgNewKeyRequest } from "./types/warden/warden/tx";
import { QuerySpaceByAddressResponse } from "./types/warden/warden/query";
import { MsgUpdateKeychainResponse } from "./types/warden/warden/tx";
import { MsgNewSignTransactionRequest } from "./types/warden/warden/tx";
import { MsgNewSignTransactionRequestResponse } from "./types/warden/warden/tx";
import { MetadataEthereum } from "./types/warden/warden/tx";
import { KeychainFees } from "./types/warden/warden/keychain";
import { KeyRequest } from "./types/warden/warden/key";
import { MsgAddKeychainPartyResponse } from "./types/warden/warden/tx";
import { QuerySignTransactionRequestsRequest } from "./types/warden/warden/query";
import { MsgAddSpaceOwner } from "./types/warden/warden/tx";
import { MsgNewKeychainResponse } from "./types/warden/warden/tx";
import { MsgNewKey } from "./types/warden/warden/tx";
import { MsgFulfilSignatureRequestResponse } from "./types/warden/warden/tx";
import { KeyResponse } from "./types/warden/warden/query";
import { Keychain } from "./types/warden/warden/keychain";
import { MsgUpdateKeychain } from "./types/warden/warden/tx";
import { MsgNewSignatureRequestResponse } from "./types/warden/warden/tx";
import { QueryKeyRequestsRequest } from "./types/warden/warden/query";
import { QuerySignatureRequestsResponse } from "./types/warden/warden/query";
import { MsgUpdateSpace } from "./types/warden/warden/tx";
import { QueryParamsResponse } from "./types/warden/warden/query";
import { Space } from "./types/warden/warden/space";
import { MsgNewKeyRequestResponse } from "./types/warden/warden/tx";
import { MsgNewSignatureRequest } from "./types/warden/warden/tx";
import { MsgFulfilSignatureRequest } from "./types/warden/warden/tx";
import { Key } from "./types/warden/warden/key";
import { MsgUpdateParams } from "./types/warden/warden/tx";
import { QueryKeychainsRequest } from "./types/warden/warden/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/warden.warden.MsgNewKeychain", MsgNewKeychain],
    ["/warden.warden.Params", Params],
    ["/warden.warden.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/warden.warden.QueryKeyRequestByIdRequest", QueryKeyRequestByIdRequest],
    ["/warden.warden.QueryKeysRequest", QueryKeysRequest],
    ["/warden.warden.WalletKeyResponse", WalletKeyResponse],
    ["/warden.warden.MsgNewSpaceResponse", MsgNewSpaceResponse],
    ["/warden.warden.SignTransactionRequest", SignTransactionRequest],
    ["/warden.warden.QuerySpaceByAddressRequest", QuerySpaceByAddressRequest],
    ["/warden.warden.QueryKeyRequestsResponse", QueryKeyRequestsResponse],
    ["/warden.warden.QuerySignatureRequestsRequest", QuerySignatureRequestsRequest],
    ["/warden.warden.QuerySignTransactionRequestByIdRequest", QuerySignTransactionRequestByIdRequest],
    ["/warden.warden.MsgUpdateSpaceResponse", MsgUpdateSpaceResponse],
    ["/warden.warden.GenesisState", GenesisState],
    ["/warden.warden.SignRequest", SignRequest],
    ["/warden.warden.QueryKeychainByAddressResponse", QueryKeychainByAddressResponse],
    ["/warden.warden.QueryKeychainsResponse", QueryKeychainsResponse],
    ["/warden.warden.QuerySignatureRequestByIdResponse", QuerySignatureRequestByIdResponse],
    ["/warden.warden.SignTransactionRequestResponse", SignTransactionRequestResponse],
    ["/warden.warden.MsgRemoveSpaceOwnerResponse", MsgRemoveSpaceOwnerResponse],
    ["/warden.warden.QuerySpacesRequest", QuerySpacesRequest],
    ["/warden.warden.QueryKeychainByAddressRequest", QueryKeychainByAddressRequest],
    ["/warden.warden.MsgUpdateKeyRequestResponse", MsgUpdateKeyRequestResponse],
    ["/warden.warden.QueryParamsRequest", QueryParamsRequest],
    ["/warden.warden.MsgUpdateKeyRequest", MsgUpdateKeyRequest],
    ["/warden.warden.QuerySignTransactionRequestsResponse", QuerySignTransactionRequestsResponse],
    ["/warden.warden.MsgAddSpaceOwnerResponse", MsgAddSpaceOwnerResponse],
    ["/warden.warden.MsgRemoveSpaceOwner", MsgRemoveSpaceOwner],
    ["/warden.warden.MsgSignedData", MsgSignedData],
    ["/warden.warden.MsgNewSpace", MsgNewSpace],
    ["/warden.warden.QuerySpacesByOwnerRequest", QuerySpacesByOwnerRequest],
    ["/warden.warden.QuerySignTransactionRequestByIdResponse", QuerySignTransactionRequestByIdResponse],
    ["/warden.warden.MsgAddKeychainParty", MsgAddKeychainParty],
    ["/warden.warden.QuerySpacesResponse", QuerySpacesResponse],
    ["/warden.warden.QueryKeyRequestByIdResponse", QueryKeyRequestByIdResponse],
    ["/warden.warden.QueryKeysResponse", QueryKeysResponse],
    ["/warden.warden.QuerySignatureRequestByIdRequest", QuerySignatureRequestByIdRequest],
    ["/warden.warden.MsgNewKeyRequest", MsgNewKeyRequest],
    ["/warden.warden.QuerySpaceByAddressResponse", QuerySpaceByAddressResponse],
    ["/warden.warden.MsgUpdateKeychainResponse", MsgUpdateKeychainResponse],
    ["/warden.warden.MsgNewSignTransactionRequest", MsgNewSignTransactionRequest],
    ["/warden.warden.MsgNewSignTransactionRequestResponse", MsgNewSignTransactionRequestResponse],
    ["/warden.warden.MetadataEthereum", MetadataEthereum],
    ["/warden.warden.KeychainFees", KeychainFees],
    ["/warden.warden.KeyRequest", KeyRequest],
    ["/warden.warden.MsgAddKeychainPartyResponse", MsgAddKeychainPartyResponse],
    ["/warden.warden.QuerySignTransactionRequestsRequest", QuerySignTransactionRequestsRequest],
    ["/warden.warden.MsgAddSpaceOwner", MsgAddSpaceOwner],
    ["/warden.warden.MsgNewKeychainResponse", MsgNewKeychainResponse],
    ["/warden.warden.MsgNewKey", MsgNewKey],
    ["/warden.warden.MsgFulfilSignatureRequestResponse", MsgFulfilSignatureRequestResponse],
    ["/warden.warden.KeyResponse", KeyResponse],
    ["/warden.warden.Keychain", Keychain],
    ["/warden.warden.MsgUpdateKeychain", MsgUpdateKeychain],
    ["/warden.warden.MsgNewSignatureRequestResponse", MsgNewSignatureRequestResponse],
    ["/warden.warden.QueryKeyRequestsRequest", QueryKeyRequestsRequest],
    ["/warden.warden.QuerySignatureRequestsResponse", QuerySignatureRequestsResponse],
    ["/warden.warden.MsgUpdateSpace", MsgUpdateSpace],
    ["/warden.warden.QueryParamsResponse", QueryParamsResponse],
    ["/warden.warden.Space", Space],
    ["/warden.warden.MsgNewKeyRequestResponse", MsgNewKeyRequestResponse],
    ["/warden.warden.MsgNewSignatureRequest", MsgNewSignatureRequest],
    ["/warden.warden.MsgFulfilSignatureRequest", MsgFulfilSignatureRequest],
    ["/warden.warden.Key", Key],
    ["/warden.warden.MsgUpdateParams", MsgUpdateParams],
    ["/warden.warden.QueryKeychainsRequest", QueryKeychainsRequest],
    
];

export { msgTypes }