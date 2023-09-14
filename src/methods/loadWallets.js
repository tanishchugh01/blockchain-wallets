import fs from "fs";
import CONSTANTS from "../configs/CONSTANTS.js";
const { STORAGE_PATH } = CONSTANTS;

const loadWallets = () => {
  try {
    const walletsData = fs.readFileSync(STORAGE_PATH, "utf8");
    return JSON.parse(walletsData);
  } catch (err) {
    return [];
  }
};

export default loadWallets;
