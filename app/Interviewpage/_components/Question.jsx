"use client"
import React, { useState,useEffect } from 'react';
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm/expressions';
import './Question.css'
import {id} from '../../dashboard/_components/Form'
import { Volume2 } from 'lucide-react';
import Link from 'next/link';
const Question = () => {
  const [index, setindex] = useState(0);
  const [ques, setques] = useState();
  const [active, setactive] = useState();

  let mockjson;
useEffect(() => {
  console.log(id)
  GetInterviewDetails();
}, [index])

const GetInterviewDetails=async(info)=>{
     const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,'c8bebc02-720f-456c-8c5a-9122d338dbc8')) 
      mockjson=JSON.parse(result[0].jsonMockResp);
     console.log(mockjson)
     console.log(mockjson[index].question);
     setques(mockjson[index].question)
    //  console.log(result);
    //  const question=(result[0].jsonMockResp);
    //  console.log(question)
    // const result = await db.select(
    // ).from(MockInterview).where(MockInterview.jobExperience.eq(info));
    // console.log(result);
    
}
const textToSpeech=(text)=>{
if('speechSynthesis' in window){
  const speech=new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
else{
  alert("Sorry your browser doesn't support");
}
}

  return (
  
    <div id='left'>
      <div id='left_div'>
        <div className='button_div'>
      <button onClick={()=>setindex(0)} >Question 1</button>
      <button onClick={()=>setindex(1)} >Question 2</button>
      <button onClick={()=>setindex(2)} >Question 3</button>
      <button onClick={()=>setindex(3)} >Question 4</button>
      <button onClick={()=>setindex(4)} >Question 5</button>
        </div>
      <div id='show'>
        <h1>{ques}</h1>
        <Volume2 style={{cursor:'pointer',marginLeft:"15px"}} onClick={()=>textToSpeech(ques)}/>
      </div>
     <Link href="/Review"><button id='end'>End Interview</button></Link> 
      </div>
    </div>
  )
}

export default Question
