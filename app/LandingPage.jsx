import React from 'react';

import Link from 'next/link';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
       <div id='box'>
     <h1>Welcome to InterviewApp</h1>
     <p>Prepare for your dream job with ease</p>
   <Link href="/dashboard"><button>Start</button></Link>  
   </div>
    </div>
  )
}

export default LandingPage

