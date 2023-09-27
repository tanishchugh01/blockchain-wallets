import loadWallets from "./loadWallets.js";

const getWalletInfo = (walletName) => {
  try {
    const wallets = loadWallets();

    const wallet = wallets.find((wallet) => wallet.name === walletName);

    return wallet;
  } catch (error) {
    console.error(error?.response?.data?.error);

    return null;
  }
};

export default getWalletInfo;
