import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import Buttons from './components/Buttons';
const apikey = import.meta.env.VITE_API_KEY
function App() {
  return (
    <div className='flex flex-col min-h-screen h-full bg-black w-full text-white items-center gap-8 justify-center p-4'>
      <ConnectionProvider endpoint={`https://solana-devnet.g.alchemy.com/v2/${apikey}`}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <h1 className='text-6xl sm:text-5xl font-serif text-center '>Solana Faucet</h1>
            <div className='flex flex-col w-full sm:w-3/4 md:w-1/2 items-center gap-6'>
              <Buttons/>
              <h1 className='text-xl sm:text-2xl text-gray-400 text-center'>or</h1>
              <Airdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
