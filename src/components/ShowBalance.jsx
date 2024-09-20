import React, { useEffect, useState } from 'react'
import { useConnection } from '@solana/wallet-adapter-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { SlRefresh } from "react-icons/sl";
import { TbCurrencySolana } from "react-icons/tb";
function ShowBalance() {
    const { connection } = useConnection()
    const wallet = useWallet()
    const [balance, setBalance] = useState(0)
    const publicKey = wallet.publicKey
    const userBalance = async () => {
        const res = await connection.getBalance(publicKey)
        const balance = res / LAMPORTS_PER_SOL
        const rounded = balance.toFixed(3)
        setBalance(rounded)
    }
    useEffect(() => {
        userBalance();
    }, [wallet])

    const refresh = () => {
        userBalance()
    }

    return (
        <div className='flex flex-row gap-2 justify-center'>
            <div className='flex flex-row  items-center '>
                <TbCurrencySolana className=' text-3xl text-white' />
                <div className='flex flex-row text-2xl p-2  items-center'>
                    <h1 className=' bg-gradient-to-r font-bold from-slate-100 to-slate-300 text-transparent bg-clip-text '>{balance}</h1>
                    <SlRefresh onClick={refresh} className=' cursor-pointer text-white text-xl ml-2 ' />
                </div>
            </div>
        </div>
    )
}

export default ShowBalance
