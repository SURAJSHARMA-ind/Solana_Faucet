import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

  return (
    <div className="flex flex-col w-full h-screen gap-2 text-black">
      <div className="flex flex-row w-full justify-between gap-2 ">
        <input
          id="to"
          type="text"
          placeholder="To" 
          className="w-1/2 p-2 rounded-md "
          
          />

        <input
          id="amount"
          type="text"
          placeholder="Amount" 
          className="w-1/2 p-2 rounded-md "
          />

      </div>
      <button className="bg-gray-500 rounded-md p-2 w-1/2" onClick={sendTokens}>Send</button>
    </div>
  );
}