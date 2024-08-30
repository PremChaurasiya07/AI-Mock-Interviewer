'use client'
import React from 'react'
import { useState } from 'react'
import { Camera, Webcam, WebcamIcon } from 'lucide-react';

const Cameramic = () => {
  const [WebCamEnabled,setWebCamEnabled]=useState(false)
  return (
    <div>
     {
 WebCamEnabled? <Webcam
  onUserMedia={()=>setWebCamEnabled(true)}
 onUserMediaError={()=>setWebCamEnabled(false)}
 
 style={{
  width:'300px',
  height:'300px'
 }}
 />
 :
 <>
 <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
 <button onClick={()=>setWebCamEnabled(true)}>Enabled Camera And Mic</button>
 </>
     } 
    
      
     </div>
  )
}

export default Cameramic
