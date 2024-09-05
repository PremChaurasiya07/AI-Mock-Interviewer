'use client'
import React from 'react'
import { useState } from 'react'
import { Camera,WebcamIcon } from 'lucide-react';
import Webcam from 'react-webcam';

const Cameramic = () => {
  const [WebCamEnabled,setWebCamEnabled]=useState(false)
  return (
    <div >
     {
 WebCamEnabled? <Webcam
  onUserMedia={()=>setWebCamEnabled(true)}
 onUserMediaError={()=>setWebCamEnabled(false)}
 
 style={{
  width:'800px',
  height:'604px',
  marginTop:"50px",
  border:"5px solid black",
  marginLeft:"60px"
 }}
 />
 :
 <>
 <div>
 <WebcamIcon style={{marginLeft:"18vw",width:"24vw"}} className='h-72 my-20 p-20 bg-secondary rounded-lg border'/>
 </div>
 <button style={{marginLeft:"22vw",border:"2px solid black",borderRadius:"24px",width:"18vw",marginBottom:"8vh",height:"6vh",}} onClick={()=>setWebCamEnabled(true)}>Enabled Camera And Mic</button>
 </>
     } 
    
      
     </div>
  )
}

export default Cameramic
