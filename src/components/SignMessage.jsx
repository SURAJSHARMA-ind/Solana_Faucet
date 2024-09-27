import React, { useState } from 'react';
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import toast ,{ Toaster } from 'react-hot-toast';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [message,setMessage]= useState("")
    
    const inputHandler =(e)=>{
        setMessage(e.target.value)
    }

    async function onClick() {
        if(!message){
          return  toast.error("Message is empty")
        }
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        toast.success('success', `Message signature: ${bs58.encode(signature)}`);
    };

    return (
        <div className='flex flex-row justify-center gap-2'>
            <Toaster />
            <input 
            className='p-2 rounded-md  text-black'
            onChange={inputHandler}
            value={message} 
            type="text" 
            placeholder="Message"
             />

            <button 
            className='bg-purple-700 rounded-md p-2 hover:bg-purple-800 '
            onClick={onClick}>
                Sign Message
            </button>
        </div>
    );
};