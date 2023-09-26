import saveWallets from "../methods/saveWallets.js";
import loadWallets from "../methods/loadWallets.js";
import blockCypher from "../configs/blockCypher.js";

const importWallet = async (walletName, mnemonic) => {
  try {
    const response = await blockCypher.post("/wallets", {
      name: walletName,
      mnemonic: mnemonic,
    });
    
    const wallet = response.data;
    
    if (wallet) {
      const wallets = loadWallets();
      wallets.push(wallet);
      saveWallets(wallets);
    }

    return wallet;
  } catch (error) {
      console.error(error?.response?.data?.error);

    return null;
  }
};

export default importWallet;
