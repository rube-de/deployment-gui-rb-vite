import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { mainnet, sepolia, polygon, optimism } from 'wagmi/chains'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'FactoryManager',
          address: {
            [mainnet.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
            [sepolia.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
            [polygon.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
            [optimism.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
          },
        },
        {
          name: 'BrokerbotFactory',
          address: {
            [mainnet.id]: '0xfAe70dEBb64a7176aaA41D1d7fEAfc4CCA4a5107',
            [sepolia.id]: '0xfAe70dEBb64a7176aaA41D1d7fEAfc4CCA4a5107',
            [polygon.id]: '0xfAe70dEBb64a7176aaA41D1d7fEAfc4CCA4a5107',
            [optimism.id]: '0xfAe70dEBb64a7176aaA41D1d7fEAfc4CCA4a5107',
          },
        },
        {
          name: 'TokenFactory',
          address: {
            [mainnet.id]: '0x331e15Ea9304c2B2A1A8f9f3d56047a8895DeCb0',
            [sepolia.id]: '0x331e15Ea9304c2B2A1A8f9f3d56047a8895DeCb0',
            [polygon.id]: '0x331e15Ea9304c2B2A1A8f9f3d56047a8895DeCb0',
            [optimism.id]: '0x331e15Ea9304c2B2A1A8f9f3d56047a8895DeCb0',
          },
        },
        {
          name: 'AktionriasFactory',
          address: {
            [mainnet.id]: '0x5D07D23567DD022FA7105BEE9D1d1352c0CA82B3',
            [sepolia.id]: '0x5D07D23567DD022FA7105BEE9D1d1352c0CA82B3',
            [polygon.id]: '0x5D07D23567DD022FA7105BEE9D1d1352c0CA82B3',
            [optimism.id]: '0x5D07D23567DD022FA7105BEE9D1d1352c0CA82B3',
          },
        }
      ],
    }),
    // etherscan({
    //   apiKey: process.env.POLYGONSCAN_API_KEY!,
    //   chainId: polygon.id,
    //   contracts: [
    //     {
    //       name: 'FactoryManager',
    //       address: {
    //         [polygon.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
    //       },
    //     },
    //   ],
    // }),
    react(),
  ],
})
