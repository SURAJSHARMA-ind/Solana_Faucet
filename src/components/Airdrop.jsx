import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

function Airdrop() {
  const [amount, setAmount] = useState(0);
  const wallet = useWallet();
  const { connection } = useConnection();
  const [isdisable,setIsDisable] =useState(false)
  const [inputkey,setInputKey] =useState('')
  
  useEffect(()=>{
    if(wallet.connected) {
      console.log('isdisables: true');
      setIsDisable(true)
      setInputKey('')
    }else{
      setIsDisable(false)
      console.log('isdisables: false');
    }
  },[wallet.connected])

  const handleinputkey =(e)=>{
    setInputKey(e.target.value)
  }
  
  const inputHandler = (e) => {
    setAmount(e.target.value);
  };

  const sendAirdrop = async () => {
    try {
      const publicKey = wallet.publicKey || new PublicKey(inputkey) 
      await connection.requestAirdrop(publicKey, amount * 1000000000);
      alert(`Airdropped ${amount} SOL! to ${wallet.publicKey||inputkey}`);
      console.log('InputKey is',inputkey);
      console.log('InputKey is',wallet.publicKey);
    } catch (error) {
      console.log('InputKey is',inputkey);
      console.log('Error:', error);
    }
  };

  return (
    <div className='flex flex-col w-full items-center gap-4'>
      <div className='flex flex-col w-full items-center gap-4'>
        <input
          onChange={(e)=>handleinputkey(e)}
          value={inputkey}
          disabled={isdisable}
          className={`border ${isdisable&& 'cursor-not-allowed'} bg-gray-900 text-white w-1/2 p-2 rounded-md`}
          type="text"
          placeholder='Wallet Address'
        />
        <input
          className='border bg-gray-900 text-white w-1/2 p-2 rounded-md'
          onChange={(e) => inputHandler(e)}
          type="text"
          value={amount}
          placeholder='Enter Amount'
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
