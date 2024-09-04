import React from 'react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function Buttons() {
  return (
    <div className='flex flex-col w-full items-center gap-4'>
      <WalletMultiButton className="w-full sm:w-auto" />
      <WalletDisconnectButton  className="w-full sm:w-auto" />
    </div>
  );
}

export default Buttons;
