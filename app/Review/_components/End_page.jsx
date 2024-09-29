'use client'
import React from 'react'
import {Mockresp,id,response} from '../../dashboard/_components/Form'
import { useEffect } from 'react'
import { MockInterview,UserAnswer } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm/expressions';
import './End_page.css'
import Link from 'next/link';
const End_page = () => {
    useEffect(() => {
      
      GetInterviewDetails();
      console.log(id)
    }, [])
    const refreshPage = () => {
      window.location.reload();
  };
    let mockjson;
    let ans;
    const GetInterviewDetails=async(info)=>{
      const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,id));
      mockjson=JSON.parse(result[0].jsonMockResp);
      const result2=await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef,id));
       console.log(result2)
       document.getElementById("rating").innerHTML=`Rating: ${result2[0].Rating}/5`;
       document.getElementById("feedback").innerHTML=`Feedback: ${result2[0].Feedback}`;
    
      
       console.log(mockjson);
       document.getElementById("question1").innerHTML=mockjson[0].question;
       document.getElementById("answer1").innerHTML=mockjson[0].answer;
       document.getElementById("question2").innerHTML=mockjson[1].question;
       document.getElementById("answer2").innerHTML=mockjson[1].answer;
       document.getElementById("question3").innerHTML=mockjson[2].question;
       document.getElementById("answer3").innerHTML=mockjson[2].answer;
       document.getElementById("question4").innerHTML=mockjson[3].question;
       document.getElementById("answer4").innerHTML=mockjson[3].answer;
       document.getElementById("question5").innerHTML=mockjson[4].question;
       document.getElementById("answer5").innerHTML=mockjson[4].answer;
       (result2[0].userAns)? document.getElementById("userans").innerHTML=`Useranswer: ${result2[0].userAns}`: document.getElementById("userans").innerHTML=`Userans: No user answer Found`;


     
    }
   
  return (
    <div id='page'>
      <h1 id='title'>ASSESSMENT</h1>
      <div id='asses'>
        <h1 id='congrats'>Congratulation's!</h1>
        <h4>Here Is Your Interview Feedback</h4>
        
        <div >
       <h1 id='rating'></h1>
         <p id='feedback'></p>
        </div>
      <details>
        <summary id='question1'></summary>
        <p id='answer1'></p>
        </details>
      <details>
        <summary id='question2'></summary>
        <p id='answer2'></p>
        </details>
      <details>
        <summary id='question3'></summary>
        <p id='answer3'></p>
        </details>
      <details>
        <summary id='question4'></summary>
        <p id='answer4'></p>
        </details>
      <details>
        <summary id='question5'></summary>
        <p id='answer5'></p>
        </details>

 <p id='userans'></p>
      </div>
   <Link href='./dashboard' ><button>Home</button></Link> 
    </div>
  )
}

export default End_page
