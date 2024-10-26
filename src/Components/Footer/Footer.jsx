import React from 'react'
import logo from "../../assets/logo-footer.png"
export default function Footer() {
  return (
    <div className='bg-gray-900 text-white mt-[300px]'>
      <div className='w-11/12 mx-auto py-5'>

        <div className='flex justify-center'>
            <img src={logo} alt="" />
        </div>
        <div className='flex gap-7 justify-between mt-5 pb-5'>
            <div>
                <h1 className='text-xl font-bold'>About Us</h1>
                <ul className='text-gray-500'>
                    <li>We are a passionate team</li>
                    <li>dedicated to providing the best</li>
                    <li>services to our customers</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Quick links</h1>
                <ul className='text-gray-500 list-disc pl-6 mt-2'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Subscribe</h1>
                <p className='text-gray-500 mt-3'>Subscribe to our newsletter for the latest update</p>
                <div className='flex items-center gap-2 mt-3'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className='btn btn-primary'>Subscribe</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
