import "@nomicfoundation/hardhat-toolbox-mocha-ethers"; 
 
const config = { 
  solidity: "0.8.28", 
  networks: { 
    hardhat: { 
      type: "edr-simulated", 
    }, 
  }, 
}; 
 
export default config; 



// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.20",
//   networks: {
//     mantleTestnet: {
//       url: process.env.MANTLE_RPC,
//       accounts: [process.env.PRIVATE_KEY]
//     }
//   }
// };