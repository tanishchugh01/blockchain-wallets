import loadWallets from "../methods/loadWallets.js";

const listAllWallets = () => {
  const wallets = loadWallets();
  // console.log(wallets);
  return wallets;
}

export default listAllWallets;