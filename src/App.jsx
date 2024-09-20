import React from 'react'
import Faucet from './components/Faucet'
import Navbar from './components/Navbar'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

const apikey = import.meta.env.VITE_API_KEY
function App() {
  return (
    <div>
      <ConnectionProvider endpoint={`https://solana-devnet.g.alchemy.com/v2/${apikey}`}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Navbar />
            <Faucet />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
