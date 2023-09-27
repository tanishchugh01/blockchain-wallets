import fs from "fs";
import CONSTANTS from "../configs/CONSTANTS.js";
const { STORAGE_PATH } = CONSTANTS;

const saveWallets = (wallets) => {
  try {
    // if storage folder does not exist, create it
    if (!fs.existsSync("./storage")) {
      fs.mkdirSync("./storage");
    }
    
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(wallets, null, 2));

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export default saveWallets;
