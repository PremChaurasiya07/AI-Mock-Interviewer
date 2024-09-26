import React from 'react'
import { useUser} from "@clerk/clerk-react";
import { useState,useEffect } from 'react';
import Link from 'next/link';
import './Form.css'
import { ChatSession } from '@google/generative-ai';
import { chatSession } from '../API/FetchQuote';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
export let id=uuidv4();
export let Mockresp;
const Form = ({block}) => {
  
  const {user}=useUser();
  const [name, setname] = useState();
  const [exp, setexp] = useState();
  const [role, setrole] = useState();
  const [tip, settip] = useState();
  const [pass, setpass] = useState(false);
  const [Mockres, setMockres] = useState([]);
//   if(name!=""&& exp!=""&& role!=""){
// setpass(true);
//   }
//   else{
//     setpass(false);
//   }
  let i=0,j=0;
  let Quoute=["Research the company and role thoroughly",
              "Practice answering common interview questions",
              "Dress professionally and arrive on time",
              "Be confident and enthusiastic",
               "Ask insightful questions at the end",
               "Be punctual for interview"
  ];
  // function set(data){
  //  document.querySelector("#tips-para").innerHTML=`. ${data}`;
  //}
  

  let database=async()=>{
    try{
     let input='Job role: full-stack developers, Job experience:4 depend upon Job position and experience give me 5 interview question with answer nothing else in json';
      const call= await chatSession.sendMessage(input);
       Mockresp=(call.response.text()).replace('```json','').replace('```','');
      console.log(Mockresp)
      if(Mockresp){
    let response=JSON.parse(Mockresp);
       setMockres(response);
      console.log(response);
      console.log(Mockres);
     const dbres=await db.insert(MockInterview).values({
      mockId:id,
      jsonMockResp:Mockresp,
      jobRole:role,
      jobExperience:exp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')
     });
     console.log(dbres);
    }else{
      console.log("error")
    }
  
      
    }
   catch(error){
    console.error('Error fetching data:', error);
   }
  }

  let check=()=>{
      setInterval(()=>{
        if(i!=6){
        let s=Quoute[i];
        settip(s)
          // console.log(Quoute[i]);
        }
        else{
          i=0;
        }
        // block=false
        i++;
      },4500)
    }
   check();
    return (
    <div style={(block)?{display:"block",position:"none"}:{display:"none"}} id='form'  >
     <form style={{position:"absolute"}}>
      <button id='close' onClick={()=>(block=false)}>X</button>
      <h1>hii</h1>
      <hr id='hr1' style={{width:"36vw"}} />
        <label htmlFor="name">Enter Name</label><input style={{border:"1px solid black"}} type="text"  onChange={(e)=>setname(e.target.value)} placeholder='EX- XYZ' /><br />
        <label htmlFor="exp">Enter the Experience</label> <input type="number" onChange={(e)=>setexp(e.target.value)} placeholder='EX- 6'/><br />
        <label htmlFor="role">Enter the role</label> <input type="text" onChange={(e)=>setrole(e.target.value)} placeholder='EX- Software Engineer'/><br />

     
     
        <Link onClick={()=>database()} href="./Interviewpage"><button id='submit'>Submit</button></Link>
        <hr id='hr2' />  
        <div id='tips'>
        <h3 style={{fontSize:'21px',textDecoration:"underline",textTransform:'capitalize',fontWeight:"500",letterSpacing:"2px",marginLeft:"4px"}}>tips</h3>
        <p id='tips-para' style={{fontSize:"20px",marginTop:"10px",marginLeft:'6px',fontWeight:'400',wordSpacing:'3px',letterSpacing:"1.6px"
        }}></p>
          </div> 
      </form> 
                              
    </div>
  )
}


export default Form
