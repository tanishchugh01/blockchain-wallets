import blockCypher from "../configs/blockCypher.js";
import saveWallets from "../methods/saveWallets.js";
import loadWallets from "../methods/loadWallets.js";

const createWallet = async (walletName, address = undefined) => {
  // Address is optional parameter

  if (!address) {
    try {
      const response = await blockCypher.post("/addrs", {});
      address = response.data.address;
    } catch (error) {
      console.error("Error in creating address", error?.response?.data?.error);
      return null;
    }
  }

  try {
    const response = await blockCypher.post("/wallets", {
      name: walletName,
      addresses: [address],
    });

    const wallet = response.data;

    if (wallet) {
      const wallets = loadWallets();
      wallets.push(wallet);
      saveWallets(wallets);
      // console.log(`New Wallet Created: ${wallet?.name}`);
    }

    return wallet;
  } catch (error) {
    console.error("Error in creating wallet", error?.response?.data?.error);

    return null;
  }
};

export default createWallet;
