"use client"
import React, { useState,useEffect } from 'react';
import { eq } from 'drizzle-orm/expressions';
import './Question.css'
import {id} from '../../dashboard/_components/Form'
import { Volume2 } from 'lucide-react';
import Link from 'next/link';
import { MockInterview, UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { userans } from './Cameramic';
import { useUser } from '@clerk/nextjs';
import { chatSession } from '../../dashboard/API/FetchQuote';
import { Mockresp } from '../../dashboard/_components/Form';
import moment from 'moment/moment';

const Question = () => {
  const {user}=useUser();
  const [index, setindex] = useState(0);
  const [ques, setques] = useState();
  const [display, setdisplay] = useState(false);

  const [block,setblock] = useState(true);

  let mockjson;
useEffect(() => {
  console.log(id)
  GetInterviewDetails();
}, [index])

const insert=async()=>{
  setdisplay(true);
  const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,id));
  console.log(result) 
  let res=JSON.parse(result[0].jsonMockResp);
  let input=`Question: ${mockjson}, Answer: ${userans}, Depending upon the given question and answer give a short 2-3 line feedback like area of improvement etc and give rating in number from 0 to 5 nothing else in json format `;
  const feed=await chatSession.sendMessage(input);
  let feedans=JSON.parse((feed.response.text()).replace('```json','').replace('```',''));
 

  const dbres=await db.insert(UserAnswer).values({
    
    mockIdRef:id,
    question:res,
    // correctAns:mockjson,
    userAns:userans,
    Rating:feedans.rating,
    Feedback:feedans.feedback,
    createdBy:user?.primaryEmailAddress?.emailAddress,
    createdAt:moment().format('DD-MM-yyyy')
   }); 
  
   
}

const GetInterviewDetails=async(info)=>{
     const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,id));
     console.log(result) 
     mockjson=JSON.parse(result[0].jsonMockResp);
     console.log(mockjson)
     console.log(mockjson[index]);
     setques(mockjson[index].question);
     setblock(false);
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
      <button onClick={()=>setindex(0)} className='btn' >Question 1</button>
      <button onClick={()=>setindex(1)} >Question 2</button>
      <button onClick={()=>setindex(2)} >Question 3</button>
      <button onClick={()=>setindex(3)} >Question 4</button>
      <button onClick={()=>setindex(4)} >Question 5</button>
        </div>
      <div id='show'>
        <h1 id='interviewques'>{ques}</h1>
        <Volume2 id='vol' style={{cursor:'pointer',marginLeft:"15px"}} onClick={()=>textToSpeech(ques)}/>
      </div>
      <button id='start1' onClick={()=>GetInterviewDetails()}  style={(block)?{display:"block"}:{display:"none"}}>Start</button>
       <button id='end' onClick={()=>insert()}>End Interview</button>
      </div>
      <div id='transfer' style={(display)?{display:"block"}:{display:"none"}}>
<h1>Do you really want to end this interview</h1>
<Link href='/Review'><button id='yes'>Yes</button></Link>
<button id='no' onClick={()=>setdisplay(false)}>No</button>

</div>
    </div>
  )
}

export default Question
