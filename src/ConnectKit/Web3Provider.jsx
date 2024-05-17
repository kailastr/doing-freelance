import { WagmiProvider, createConfig } from "wagmi";
import {
  sepolia,
  goerli,
  polygonMumbai,
  bscTestnet,
  baseSepolia,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// const alchemyId = process.env.REACT_APP_ALCHEMY_ID; // Ensure you have this in your .env
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID; // Ensure you have this in your .env

export const connectConfig = createConfig(
  getDefaultConfig({
    chains: [sepolia],
    walletConnectProjectId,
    appName: "Doing-Freelance",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => (
  <WagmiProvider config={connectConfig}>
    <QueryClientProvider client={queryClient}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

// transports: {
//   [mainnet.id]: http(`https://eth-mainnet.alchemyapi.io/v2/${alchemyId}`),
// },
// appDescription: "Your App Description",
// appUrl: "https://yourapp.com",
// appIcon: "https://yourapp.com/logo.png",
