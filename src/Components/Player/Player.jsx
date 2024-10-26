import React from 'react'

export default function Player({player,handleSelectPlayer}) {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=player
    
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5 border">
  <figure className='h-[300px]'>
    <img
      className='h-full w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-4'>
    <i className="fa-solid fa-user text-2xl text-gray-500"></i>
    <h2 className="card-title text-gray-600 text-2xl ">{name}</h2>
    </div>
   <div className='flex justify-between items-center pb-2 border-b-2'>
    <div className='flex items-center gap-2'>
    <i className="fa-solid fa-flag text-gray-500"></i>
    <h1 className='text-gray-500 text-sm'>{country}</h1>
    </div>
    <div>
      <h1 className='text-sm font-semibold text-gray-500 border-2 py-1 px-3 rounded-xl bg-gray-200'>{role}</h1>
    </div>
   </div>
   <h1 className='text-gray-500'>Rating</h1>
    <div className='flex justify-between'>
      <p className='text-base text-gray-700'>{battingType}</p>
      <p className='text-base text-gray-400'>{`${bowlingType=="None"?"N/A":bowlingType}`}</p>
    </div>
    <div className='flex justify-between items-center mt-3'>
      <h1 className='text-gray-600'>Price : $ {biddingPrice}</h1>
      <button onClick={()=>handleSelectPlayer(player)} className='border-2 py-2 px-3 rounded-xl'>Choose player</button>
    </div>
    
  </div>
</div>
    </div>
  )
}
