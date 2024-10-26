import Player from '../Player/Player'

export default function Available({players,handleSelectPlayer}) {
    
    // console.log(players)
  return (
    <div className=''>
        <h1 className='text-3xl font-bold text-slate-900'>Available Players</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            players.map((player,index)=><Player key={index} handleSelectPlayer={handleSelectPlayer} player={player}></Player>)
        }
        </div>
        
    </div>
  )
}
