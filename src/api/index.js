import createWallet from "./createWallet.js";
import importWallet from "./importWallet.js";
import listAllWallets from "./listAllWallets.js";
import getWalletBalance from "./getWalletBalance.js";
import getWalletTransactions from "./getWalletTransactions.js";
import getUnusedAddress from "./getUnusedAddress.js";

const apis = {
  createWallet,
  importWallet,
  listAllWallets,
  getWalletBalance,
  getWalletTransactions,
  getUnusedAddress,
};

export default apis;
