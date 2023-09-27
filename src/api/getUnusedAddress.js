import getWalletInfo from "../methods/getWalletInfo.js";
import getAddressBalance from "../methods/getAddressBalance.js";

const getUnusedAddress = async (walletName) => {
  try {
    const wallet = getWalletInfo(walletName);
    
    const addresses = wallet.addresses;

    const  unusedAddress = await addresses.find(async (address) => {
      const balance = await getAddressBalance(address);

      return balance === 0;
    });
    
    console.log(`Unused Address: ${unusedAddress}`);

    return unusedAddress;
    
  } catch (error) {
    console.log(error);
    console.error(error?.response?.data);

    return null;
  }
};

export default getUnusedAddress;
