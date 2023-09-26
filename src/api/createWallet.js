import blockCypher from "../configs/blockCypher.js";
import saveWallets from "../methods/saveWallets.js";
import loadWallets from "../methods/loadWallets.js";

const createWallet = async (walletName,address=undefined) => {
  // Address is optional parameter
  try {
    const response = await blockCypher.post("/wallets", {
      name: walletName,
      address:address
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
    console.error(error?.response?.data?.error);

    return null;
  }
};

export default createWallet;
