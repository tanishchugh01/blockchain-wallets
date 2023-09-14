//
// function saveWallets(wallets) {
//   fs.writeFileSync(STORAGE_FILE, JSON.stringify(wallets, null, 2));
// }

import fs from "fs";
import CONSTANTS from "../configs/CONSTANTS.js";
const { STORAGE_PATH } = CONSTANTS;

const saveWallets = (wallets) => {
  try {
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(wallets, null, 2));

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export default saveWallets;
