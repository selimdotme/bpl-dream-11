import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Bannner/Banner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardContainer from './Components/CardContainer/CardContainer';
import FooterContainer from './Components/FooterContainer/FooterContainer';

export default function App() {

  const [balance,setBalance] = useState(0);

  const handleBalance = ()=>{
    toast.success("Wow Add Balance");
    const addBalance = balance + 60000000;

    setBalance(addBalance);
    
  }


  const [isActive,setIsActive]=useState({
    Available:true,
    Status:"available"
  })


  const [players,setPlayers]=useState([]);
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data => setPlayers(data))
  },[])

  // selected function start here
  const [selectPlayer,setSelectPlayer]=useState([]);

  const handleSelectPlayer = (player)=>{
    const isExist = selectPlayer.find(previousPlayer =>previousPlayer.playerId === player.playerId);
    if(!isExist){
      if(player.biddingPrice < balance){
        if(selectPlayer.length <= 5){
          const currentBalance = balance - player.biddingPrice;
        setBalance(currentBalance);
        setSelectPlayer([...selectPlayer,player])
        toast.success("Add Player");
        }
        else{
          toast.warn("already you buy 6 player");
        }
      }
      else{
        toast.warn("do not have proper money");
      }
    }
    else{
      toast.warn("already add this Player");
    }
  }
  // selected function end here



  // remove function start here
  const [currentPlayers,setCurrentPlayers] = useState([]);

  const handleRemovePlayer =(id)=>{
    toast.warn("remove this player");
    const remove =  selectPlayer.find(previousPlayer =>previousPlayer.playerId === id)
    const updates = selectPlayer.filter(previousPlayer =>previousPlayer.playerId !== id)
    setSelectPlayer(updates);
    setCurrentPlayers([...currentPlayers,remove])
  }

  // remove function end here
  
  const handleActiveStatus =(status)=>{
    if(status === "available"){
      setIsActive(
        {Available:true,
        Status:"available"}
      )
    }
    else{
      setIsActive(
        {
          Available:false,
          Status:"selected"
        }
      )
    }
  }



  return (
    <div className=''>
      <div className="w-11/12 mx-auto">
      <Header balance={balance}></Header>
      <Banner handleBalance={handleBalance}></Banner>
      <CardContainer key={players.playerId} 
       players={players}
       isActive={isActive}
        handleActiveStatus={handleActiveStatus}
         handleSelectPlayer={handleSelectPlayer}
          selectPlayer={selectPlayer}
          handleRemovePlayer={handleRemovePlayer} >
          </CardContainer>
      </div>

        <FooterContainer></FooterContainer>

      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
    </div>
  )
}
