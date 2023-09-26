import bitcore from 'bitcore-lib';
import Mnemonic from 'bitcore-mnemonic';

function deriveAddressFromMnemonic(mnemonic) {
  try {
    if (!Mnemonic.isValid(mnemonic)) {
      console.error('Invalid BIP39 mnemonic.');
      return null;
    }

    const hdPrivateKey = new Mnemonic(mnemonic).toHDPrivateKey();

    const derivedPublicKey = hdPrivateKey.derive("m/0'/0/0").hdPublicKey;
    const address = new bitcore.Address(derivedPublicKey.publicKey, bitcore.Networks.testnet); // Change to mainnet if needed

    return address.toString();
  } catch (error) {
    console.error('Error deriving address:', error);
    return null;
  }
}

export default deriveAddressFromMnemonic; 