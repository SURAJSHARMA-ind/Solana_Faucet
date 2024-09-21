import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import toast from "react-hot-toast";



export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0)
  const [receiver, setReceiver] = useState("")
  const amountHandler = (e) => {
    const userinput = e.target.value;
    if (userinput > 5) {
      setAmount(5)
      toast.error('Limit exceed: 5 Sol at a time')
    } else {

      setAmount(userinput);
    }
  }
  const receiverHandler = (e) => {
    setReceiver(e.target.value)
  }

  async function sendTokens() {
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(receiver),
      lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction, connection);
    toast.success("Sent " + amount + " SOL to " + receiver);
  }

  return (
    <div className="flex flex-col w-full  gap-2 text-black">
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
          placeholder="Amount"
          className="w-1/2 p-2 rounded-md "
        />

      </div>
      <button className="bg-gray-500 rounded-md p-2  w-1/2" onClick={sendTokens}>Send</button>
    </div>
  );
}