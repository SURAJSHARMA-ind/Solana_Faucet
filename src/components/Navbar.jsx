import React from 'react'
import ShowBalance from './ShowBalance';

function Navbar() {
  return (
    <div className='flex bg-gradient-to-tr justify-between  from-purple-900 to-indigo-800 h-14  items-center'>
      <div className='flex p-1  '>
      <h1 className='text-2xl sm:text-3xl font-bold  text-transparent bg-gradient-to-r from-white to-slate-300 bg-clip-text text-center '>Solana Faucet</h1>
      </div>
     <ShowBalance/>
    </div>
  )
}

export default Navbar
