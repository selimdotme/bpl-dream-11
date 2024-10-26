import React from 'react'
import logo from "../../assets/logo.png"
import Coin from "../../assets/coinLogo.jpg"

export default function Header({balance}) {
  return (
    <div className='flex items-center justify-between py-4 sora'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center text-xl gap-5 text-slate-500">
          <li className='border px-2 py-1 rounded-2xl'><a href="#">Home</a></li>
          <li className='border px-2 py-1 rounded-2xl'><a href="#">Fixture</a></li>
          <li className='border px-2 py-1 rounded-2xl'><a href="#">Teams</a></li>
          <li className='border px-2 py-1 rounded-2xl'><a href="#">Schedules</a></li>
          <li><a className='border flex items-center px-3 py-2 gap-2 rounded-xl text-lg text-slate-900 font-bold'>
            <span>{balance}</span> Coin <img className='w-6' src={Coin} alt="" />
            </a></li>
        </ul>
      </div>
    </div>
  )
}
