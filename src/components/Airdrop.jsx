import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import toast, { Toaster } from 'react-hot-toast';

function Airdrop() {
  const [amount, setAmount] = useState(0);
  const wallet = useWallet();
  const { connection } = useConnection();
  const [isdisable, setIsDisable] = useState(false)
  const [inputkey, setInputKey] = useState('')


  useEffect(() => {
    if (wallet.connected) {
      console.log('isdisables: true');
      setIsDisable(true)
      setInputKey('')
    } else {
      setIsDisable(false)
      console.log('isdisables: false');
    }
  }, [wallet.connected])

  const handleinputkey = (e) => {
    setInputKey(e.target.value)
  }

  const inputHandler = (e) => {
    const userinput = e.target.value;
    if (userinput > 5) {
      setAmount(5)
      return toast.error('Limit exceed: 5 Sol at a time')
    } else {

      setAmount(userinput);
    }

  };

  const sendAirdrop = async () => {
    if (amount > 0) {
      try {
        // Use toBase58() to convert the PublicKey object to a string
        const publicKey = wallet.publicKey ? wallet.publicKey.toBase58() : inputkey;
        await connection.requestAirdrop(new PublicKey(publicKey), amount * 1e9);
        const formattedKey = `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`;
  
        toast.success(`Airdropped ${amount} SOL to ${formattedKey}`);
      } catch (error) {
        return toast.error(`Error: ${error.message}`);
      }
    } else {
      return toast.error('Enter a valid amount');
    }
  };
  

  return (
    <div className='flex flex-col w-full items-center gap-4'>
       <Toaster/>

      <div className='flex flex-col w-full items-center gap-4'>
        <input
          onChange={(e) => handleinputkey(e)}
          value={inputkey}
          disabled={isdisable}
          className={`border ${isdisable && 'cursor-not-allowed'} bg-gray-900 text-white w-1/2 p-2 rounded-md`}
          type="text"
          placeholder='Wallet Address'
        />
        <input
          className='border bg-gray-900 text-white w-1/2 p-2 rounded-md'
          onChange={(e) => inputHandler(e)}
          type="number"
          min={0.001}
          value={amount}
          placeholder='Enter Amount'
          maxLength={10}
        />
      </div>
      <button
        className='bg-gray-800 text-white w-full sm:w-1/2 hover:bg-gray-900 rounded-md font-medium p-3'
        onClick={sendAirdrop}
      >
        Airdrop
      </button>
    </div>
  );
}

export default Airdrop;
