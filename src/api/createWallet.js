import blockCypher from "../configs/blockCypher.js";

const createWallet = async (walletName) => {
  try {
    const response = await blockCypher.post("/wallets", {
      name: walletName,
    });

    const wallet = response.data;

    return wallet;
  } catch (error) {
    console.log(error.response.data.error);
    return null;
  }
};

export default createWallet;
