import React from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop'
import Buttons from './Buttons';
import { SendTokens } from './SendTokens';



function Faucet() {
  return (
    <div className='flex flex-col min-h-screen h-full bg-gradient-to-tr from-indigo-900 to-black w-full text-white items-center gap-8 justify-center p-4'>
            <div className='flex flex-col w-full sm:w-3/4 md:w-1/2 items-center gap-6'>
              <Buttons/>
              <h1 className='text-xl sm:text-2xl text-gray-400 text-center'>or</h1>
              <Airdrop />
              <SendTokens/>
            </div>
    </div>
  );
}

export default Faucet;
