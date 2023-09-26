import apis from "./api/index.js";

const main = async () => {
  const wallet = await apis.importWallet(
    "My Wallysssee4ss",
    "creek own stem kiwi limb safe maze hobby april creek own stem kiwi limb safe maze hobby april"
  );
  console.log(wallet);

  const wallet2 = await apis.createWallet(
    "My Walssdsssseelewdt"
  );
  console.log(wallet2);

  const wallets = await apis.listAllWallets();
  console.log(wallets);
};

main();
console.log("Hello World!");
