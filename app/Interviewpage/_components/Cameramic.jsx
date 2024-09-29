'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { Camera,Mic,WebcamIcon } from 'lucide-react';
import Webcam from 'react-webcam';
import './Cameramic.css'
import useSpeechToText from 'react-hook-speech-to-text';

export let userans;

const Cameramic = () => {
  let setuserans;
 [userans, setuserans] = useState('');

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  useEffect(() => {
    results.map((result)=>{
      console.log(result)
      setuserans(prevAns=>prevAns+result?.transcript);
    })
  }, [results])
  // useEffect(() => {
  //   console.log('Results:', results);
  //   results.forEach(result => {
  //     console.log('Transcript:', result.transcript);
  //     setuserans(prevAns => prevAns + result.transcript);
  //   });
  // }, [results]);
  
  
  if(error){
    console.log("something went wrong");
  }
  

  const [WebCamEnabled,setWebCamEnabled]=useState(false)
  return (
    <>
    <div id='camera_space' style={{height:"100vh",width:'60vw',fontFamily:'Arial, sans-serif'}} >
      <div id='cameradiv' style={{marginLeft:"9vw",width:"50vw",marginTop:'8vh'}}>
      {
 WebCamEnabled? <Webcam mirrored={true}
  onUserMedia={()=>setWebCamEnabled(true)}
 onUserMediaError={()=>setWebCamEnabled(false)}


 />
 :
 <>
 <div>
 <WebcamIcon style={{width:"30vw",height:"40vh",marginLeft:"7vw"}} className='h-60 my-20 p-26 bg-secondary rounded-lg border'/>
 </div>
 
 </>
     } 
  </div>
   
     <button id='camera_btn' onClick={()=>setWebCamEnabled(!WebCamEnabled)}>Enabled Camera</button>
 <div id='record'>
  
 <h1 id='record_statement'>Recording: {isRecording.toString()}</h1>
      <button id='record_btn' onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? <h2 style={{position:"relative"}}>Recording...</h2>: 'Start Recording'}
      </button>
     
    
 </div>
     </div>

     </>
     
     
     
  )
}

export default Cameramic
