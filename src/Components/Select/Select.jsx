import React from 'react'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer'

export default function Select({selectPlayer,handleRemovePlayer,handleActiveStatus}) {
  
  return (
    <div>
      <h1 className='text-3xl font-bold text-slate-900'>Selected Players : {selectPlayer.length}/ 6</h1>
      
      <div>
        {
          selectPlayer.map((p,index)=><SelectedPlayer p={p} key={index} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)
        }
      </div>

      <button onClick={()=>{handleActiveStatus("available")}} className='btn text-xl bg-[#E7FE29] border-[#E7FE29 mt-7'>Add to players</button>
      
    </div>
  )
}
