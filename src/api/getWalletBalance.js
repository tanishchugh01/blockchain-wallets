import blockCypher from "../configs/blockCypher.js";
import loadWallets from "../methods/loadWallets.js";
import getAddressBalance from "../methods/getAddressBalance.js";

const getWalletBalance = async (walletName) => {
  const wallets = loadWallets();

  const wallet = wallets.find((wallet) => wallet.name === walletName);

  if (!wallet) {
    console.error(`Wallet Not Found: ${walletName}`);
    return null;
  }

  try {
    let balance = 0;
    
    for (const address of wallet.addresses) {
      const addressBalance = await getAddressBalance(address);
      
      balance += addressBalance;
    }

    const unit = "satoshi";
    
    console.log(`Balance: ${balance} ${unit}`);

    return { balance, unit };
  } catch (error) {
    console.error(error?.response?.data);

    return null;
  }
};

export default getWalletBalance;
