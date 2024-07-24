import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { mainnet, sepolia, polygon } from 'wagmi/chains'
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
          },
        },
      ],
    }),
    etherscan({
      apiKey: process.env.POLYGONSCAN_API_KEY!,
      chainId: polygon.id,
      contracts: [
        {
          name: 'FactoryManager',
          address: {
            [polygon.id]: '0x555E7852d4ab6F8C557F9Bc6d17ADdb8c7911d78',
          },
        },
      ],
    }),
    react(),
  ],
})
