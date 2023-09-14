import createWallet from "./api/createWallet.js";
import dotenv from "dotenv";

const main = async () => {
  const wallet = await createWallet("My_Wallet");
  wallet;
}

main();
console.log('Hello World!');