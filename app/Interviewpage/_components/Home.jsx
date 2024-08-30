
import React from 'react'
import {fetchData,res} from "../../dashboard/API/FetchQuote";

// import { useState } from 'react';
 import Cameramic from './Cameramic';

const Home = () => {
    let y=fetchData();
   let z=JSON.stringify(fetchData());
  
 
  return (
    <div style={{display:"flex"}}>
     <div style={{width:"40vw",height:"100vh",backgroundColor:"Red"}}>
    <p>hii</p>
    <div>
      <ul>
        {
       y
        }
      </ul>
    </div>
    <button>prev</button>
    <button>next</button>
    </div> 
   <Cameramic/>
    </div>
  )
}

export default Home
