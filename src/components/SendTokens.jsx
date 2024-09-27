import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgOverflow } from "react-icons/cg";



export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0)
  const [receiver, setReceiver] = useState("")

  const amountHandler = (e) => {
    
    const userinput = e.target.value;
    
    if (userinput > 5) {
      setAmount(5)
      return toast.error('Limit exceed: 5 Sol at a time')
    }else {
      setAmount(userinput);
    }
  }
  const receiverHandler = (e) => {
    setReceiver(e.target.value)
  }

  async function sendTokens() {
    try{
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(receiver),
      lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction, connection);
    toast.success(`Sent ${amount} SOL to ${receiver.slice(0,4)}...${receiver.slice(-4)}`)
  }catch(error){
    toast.error(`Error : ${error}`)
  }
  }

  return (
    <div className="flex flex-col w-full  gap-2 text-black">
      <Toaster />
      <div className="flex flex-row w-full justify-between gap-2 ">
        <input
          value={receiver}
          onChange={receiverHandler}
          type="text"
          placeholder="To"
          className="w-1/2 p-2 rounded-md "

        />

        <input
          value={amount}
          onChange={amountHandler}
          type="number"
          min={0.00000001}
          placeholder="Amount"
          className="w-1/2 p-2 rounded-md "
        />

      </div>
      <button className="bg-gray-800 rounded-md p-2 hover:bg-gray-900 text-white  w-full" onClick={sendTokens}>Send</button>
    </div>
  );
}