"use client"
import React from 'react'
import {fetchData,res} from "../../dashboard/API/FetchQuote";
import { chatSession } from '../../dashboard/API/FetchQuote';
// import { useState } from 'react';
 import Cameramic from './Cameramic.jsx';
 import './Home.css'
 import { useState } from 'react';
const Home = () => {
  let response,b,c;
  const [dialouge, setdialouge] = useState(true)
  const [data, setdata] = useState([])
  //   let y=fetchData();
  //  let z=JSON.stringify(-fetchData());
  const onSubmit=async(e)=>{
    setdialouge(!dialouge);
    console.log(dialouge);
    try{
      const call= await chatSession.sendMessage("5 interview Question");
      const Mockresp=(call.response.text()).replace('```json');
      response=JSON.parse(Mockresp);
      setdata(response);
    
      console.log(response);
     
      // b=response['0'];
      // // for(let i=0;i<=4;i++){
      // //   c[i]=response['0'];
      // //         }
      // console.log(response['0']);
      // console.log(typeof(response));
      // console.log(c)
      // return response ;
      
    }
   catch(error){
    console.error('Error fetching data:', error);
   }
    
  }
  
 let a=[2,4,5];
 return (
 
    <div style={{display:"flex"}}>
      <div id='start' style={(dialouge)?{display:"block"}:{display:"none"}}>
        <h4>Click Start to Proceed </h4>
<button onClick={()=>onSubmit()}>Start</button>
      </div>
     <div style={{width:"40vw",height:"100vh",backgroundColor:"Red"}}>
    <p>hii</p>
    <div>
   <p>{response}</p>
    </div>
    <button >prev</button>
    <button>next</button>
    </div> 
   <Cameramic/>
    </div>
  )
}

export default Home
