"use client"
import React from 'react'
import { chatSession } from '../../dashboard/API/FetchQuote';
// import { useState } from 'react';
 import Cameramic from './Cameramic.jsx';
 import './Home.css'
 import { useState } from 'react';
 import {name,exp,role} from '../../dashboard/_components/Form';
import Question from './Question'
import './Home.css'
const Home = () => {
  let response,b,c,input,role="data engineer";
  const [dialouge, setdialouge] = useState(true)
  const [data, setdata] = useState([])
  // console.log(name)
  //   let y=fetchData();
  //  let z=JSON.stringify(-fetchData());
  const onSubmit=async(e)=>{
    
    setdialouge(!dialouge);
    console.log(dialouge);
  //   try{
  //     input='Give 5 Interview Questions based on '+role;
  //     const call= await chatSession.sendMessage(input);
  //     const Mockresp=(call.response.text()).replace('```json','').replace('```','');
  //     response=JSON.parse(Mockresp);
  //     setdata(response);
  //     console.log(response);
     
  //     // b=response['0'];
  //     // // for(let i=0;i<=4;i++){
  //     // //   c[i]=response['0'];
  //     // //         }
  //     // console.log(response['0']);
  //     // console.log(typeof(response));
  //     // console.log(c)
  //     // return response ;
      
  //   }
  //  catch(error){
    //console.error('Error fetching data:', error);
   //}
    
  }
 return (
 
    < div style={{display:"flex",maxWidth:"100vw",maxHeight:"100vh"
    }}>
    <Question/>
   <Cameramic/>
    </div>
  )
}

export default Home
 