import React from 'react'

export default function SelectedPlayer({p,handleRemovePlayer}) {
    const {image,name,battingType,playerId}=p
    // console.log(selectPlayer);
    // console.log(p)
  return (
    <div className='mt-3 p-3 flex justify-between border-2 items-center'>
      <div>
      <div className="flex gap-4">
        <div className="w-20 h-20">
            <img className='w-full h-full' src={image} alt="" />
        </div>
        <div className="text-2xl font-semibold">
            <h1>{name}</h1>
            <h1 className='text-gray-500'>{battingType}</h1>
        </div>
      </div>
      </div>
      <div>
        <button onClick={()=>handleRemovePlayer(playerId)}><i class="fa-solid fa-trash text-red-500 text-4xl"></i></button>
      </div>
    </div>
  )
}
