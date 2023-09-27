import getWalletInfo from "../methods/getWalletInfo.js";
import blockCypher from "../configs/blockCypher.js";

const getWalletTransactions = async (walletName) => {
  const wallet = getWalletInfo(walletName);

  if (!wallet) {
    console.error(`Wallet Not Found: ${walletName}`);
    return null;
  }

  try {
    const response = await blockCypher.get(
      `/addrs/${wallet.addresses[0]}/full`
    );

    const transactions = response.data.txs;

    if (transactions.length === 0) {
      console.log(`No Transactions for ${wallet.name}`);

      return null;
    }

    console.log(`Transactions of ${wallet.name}:`);

    transactions.forEach((transaction, index) => {
      console.log(`Transaction ${index + 1}:`);
      console.log(`   Hash: ${transaction.tx_hash}`);
      console.log(`   Confirmations: ${transaction.confirmations}`);
      console.log(`   Value: ${transaction.total}`);
      console.log(
        `   Time: ${new Date(transaction.confirmed).toLocaleString()}`
      );
      console.log("");
    });

    return transactions;
  } catch (error) {
    console.error(error?.response?.data);

    return null;
  }
};

export default getWalletTransactions;
