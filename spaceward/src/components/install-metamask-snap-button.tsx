import { isLocalSnap, shouldDisplayReconnectButton } from "@/lib/metamask";
import { Button } from "./ui/button";
import { useMetaMask } from "@/def-hooks/useMetaMask";
import { env } from "@/env";
import { useMetaMaskRequestSnap } from "@/def-hooks/useMetaMaskRequestSnap";

function InstallMetaMaskSnapButton() {
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();
  const requestSnap = useMetaMaskRequestSnap();
  const isMetaMaskReady = isLocalSnap(env.defaultSnapOrigin)
    ? isFlask
    : snapsDetected;
  const isReconnect = shouldDisplayReconnectButton(installedSnap);

  if (!isMetaMaskReady) {
    return (
      <Button size="sm" variant="outline" onClick={() => {
        if (isLocalSnap(env.defaultSnapOrigin)) {
          window.open("https://chromewebstore.google.com/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk", "_blank");
        } else {
          window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
        }
      }
      }>
        Install MetaMask
      </Button>
    );
  }

  return (
    <Button size="sm" variant="outline" onClick={requestSnap}>
      {isReconnect ? "Reinstall snap" : "Install snap"}
    </Button>
  );
}

export default InstallMetaMaskSnapButton;
