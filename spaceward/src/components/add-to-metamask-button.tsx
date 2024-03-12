import { isLocalSnap } from "@/lib/metamask";
import { Button } from "./ui/button";
import { useMetaMask } from "@/def-hooks/useMetaMask";
import { env } from "@/env";
import { useMetaMaskRequestSnap } from "@/def-hooks/useMetaMaskRequestSnap";
import { KeyringSnapRpcClient } from "@metamask/keyring-api";
import { toast } from "./ui/use-toast";

function AddToMetaMaskButton({ keyId, address }: { keyId: string, address: string }) {
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();
  const requestSnap = useMetaMaskRequestSnap();
  const isMetaMaskReady = isLocalSnap(env.defaultSnapOrigin)
    ? isFlask
    : snapsDetected;
  const keyringSnapClient = new KeyringSnapRpcClient(env.defaultSnapOrigin, window.ethereum);

  const handleClick = async () => {
    if (!isMetaMaskReady) {
      console.log("MetaMask not installed, opening Chrome Web Store");
      if (isLocalSnap(env.defaultSnapOrigin)) {
        window.open("https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk", "_blank");
      } else {
        window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
      }
      return;
    }

    if (isMetaMaskReady && !installedSnap) {
      console.log("Snap not installed, requesting");
      await requestSnap();
      return;
    }

    const { update, id } = toast({
      title: "Confirm account creation in MetaMask...",
      duration: 0,
    });

    try {
      await keyringSnapClient.createAccount({
        keyId,
        address,
      });

      update({
        id,
        title: "Added to MetaMask",
        duration: 5000,
      });
    } catch (error) {
      console.error("error adding account to MetaMask", error);
      update({
        id,
        title: "Error",
        description: "An error occurred while adding to MetaMask",
        duration: 5000,
      });
    }
  }

  return (
    <Button size="sm" variant="outline" onClick={handleClick}>
      Add to MetaMask
    </Button>
  );
}

export default AddToMetaMaskButton;
