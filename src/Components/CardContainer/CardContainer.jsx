import React from 'react'
import Available from '../Available/Available'
import Select from '../Select/Select'

export default function CardContainer({handleActiveStatus,isActive,players,handleSelectPlayer,selectPlayer,handleRemovePlayer}) {
    // console.log(handleActiveStatus)
  return (
    <div className='my-6'>
        <div className='flex justify-end gap-5'>
            <button onClick={()=>{handleActiveStatus("available")}} className={`${isActive.Available?"btn text-xl bg-[#E7FE29] border-[#E7FE29":"btn"}`}>Available</button>
            <button onClick={()=>{handleActiveStatus("selected")}} className={`${isActive.Available?"btn":"btn text-xl bg-[#E7FE29] border-[#E7FE29"}`}>Selected : {selectPlayer.length}</button>
        </div>
        {
            isActive.Available?<Available handleSelectPlayer={handleSelectPlayer} players={players}></Available>: <Select selectPlayer={selectPlayer} handleRemovePlayer={handleRemovePlayer} handleActiveStatus={handleActiveStatus} ></Select>
        }
      
     
    </div>
  )
}
