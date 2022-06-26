require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note praise punch harvest merry fog town'; 
let testAccounts = [
"0xf10d0d4eff566afa25dd25a45aff5a8c8397e0910ec772267004b3b5b363eaf6",
"0x7f1110f060765ce6a04391bf1b722dccaf614723f9fef44edb6b441c16b13ff1",
"0x536877b00dbb20e9201299dcaacc54cd42be9f76d0f8ad630fd658ce536a3af2",
"0x4ee8e10267a2b1dc8aef2b4314ef6a39f81367156e87021d6574791b13e8845a",
"0x5aa08302a07ac46081e9be11246862f8947723ac9a109d11ac14f1ac13291285",
"0x447038e02ac552b00ac0e4d447bd3159c09c8590a7834e1d8769c0447fa063bb",
"0x5533473bb3ac472a87cf4a56ce4a149f0a684af49409e47e59cad069c3f9125b",
"0xc5d14bf525abe5a9c8af20c554ee8a5e5a6affec1de3c8e77f708400586071aa",
"0xa761a6a45f9e65a5f049ff16794ab8ea171cf48a9377724d74b7e2ac583b2b0f",
"0x397f36b07d00ba49a04e90dddb39ea70d98e281b1483d651b8eb2348abf6f2be"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

