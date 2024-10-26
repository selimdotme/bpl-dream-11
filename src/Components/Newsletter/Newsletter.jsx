import React from 'react'
import "./Newsletter.css"
export default function Newsletter() {
  return (
    <div className='newsletter w-9/12 mx-auto border-2 p-7 py-12 rounded-xl shadow-xl absolute right-0 left-0 -top-[200px]'>
      <div className="flex items-center justify-center">
        <div>
            <h1 className='text-2xl font-semibold text-black'>Subscribe to our Newsletter</h1>
            <p className='text-lg text-gray-500'>Get the latest updates and news right in your inbox!</p>
            <div className='flex items-center gap-4 mt-3'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className='btn btn-primary'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}
