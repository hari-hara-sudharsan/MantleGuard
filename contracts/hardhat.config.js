import "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import dotenv from "dotenv";

dotenv.config();

const config = {
  solidity: "0.8.28",

  networks: {
    hardhat: {
      type: "edr-simulated",
    },

    mantleSepolia: {
      type: "http",
      url: process.env.MANTLE_RPC,
      accounts: [process.env.PRIVATE_KEY],
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