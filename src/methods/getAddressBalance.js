import blockCypher from "../configs/blockCypher.js";

const getAddressBalance = async (address) => {
  try {
    const response = await blockCypher.get(`/addrs/${address}/balance`);

    const balance = response.data.balance;

    return balance;
  } catch (error) {
    console.error(error?.response?.data);

    return null;
  }
};

export default getAddressBalance;
