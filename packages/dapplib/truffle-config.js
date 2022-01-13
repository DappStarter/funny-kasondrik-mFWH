require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stove radar soap universe good nation food genuine'; 
let testAccounts = [
"0x7d0b7a377d68d6f3295b2044e4b0614e83a71b82c7e1c7f2e5a1f522984a4e93",
"0x627edbb52873c41ae97f26769a981a5810f5d2906fdf47ffdb729ed0b41d0b11",
"0x6c2799188cb0195b392afee15f398e3b1a9e4b36a173aea05ca39e6415c511e5",
"0x774226c7a5a11fdcc4f616297f6204c97447eb9ca765e614b43d00ffb73cff71",
"0x42576771d101af378d00bb9f266e03eacbca60490034f9f1cd93b2149db9f0ce",
"0xd0409a810c72abc37c8d21b2a9a5248e3410a5d25c23310bdb5e044bdf688b89",
"0x97af6f92e7f19030ad2dd0ebf0a401fb9f1b5c127dfed9d2ace99b99e4a53a7c",
"0x3dc3f0c00f08999eddf4b9063ec283448061eb7d3fb397f33ab1f8cbc50f44f6",
"0xfef16d260fb21f145e6edb1abf21942556bb6b4042f3947ed5ce3d664902ce44",
"0x52f2c13fb1aa70a0b68fe7c3d18619a03d5ac898fec529dc98c8d70312409a9d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


