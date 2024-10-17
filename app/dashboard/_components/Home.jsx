"use client"; 

import React from 'react'
import Form from './Form'
import { useState } from 'react'
 import './Home.css';
 import Navbar from './Navbar';
 import Link from 'next/link';

const Header = () => {
  const [block, setblock] = useState(false);
  console.log(block);

  return (
    <div id='Home' >
        <Navbar/>
      <main style={{width:"100vw",height:"60vh"}} id='Home_main'>
        <div id="side-img">
          <img src="https://www.svgrepo.com/download/492818/online-interview-male.svg" alt="" />
        </div>
    {/* <svg onClick={()=>setblock(true)} viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"  stroke-linejoin="round" stroke="#CCCCCC" stroke-width="51.2"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50"></path><path d="M448 298.666667h128v426.666666h-128z" fill="#ffffff"></path><path d="M298.666667 448h426.666666v128H298.666667z" fill="#ffffff"></path></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#4CAF50"></path><path d="M448 298.666667h128v426.666666h-128z" fill="#ffffff"></path><path d="M298.666667 448h426.666666v128H298.666667z" fill="#ffffff"></path></g></svg> */}
    <button onClick={()=>setblock(true)} id="btn_start">Start</button>
  
    <div>
    <Form block={block}/>
    </div>
      </main>
    {/* <div id='Home_bottom'>
      <h1>Previous Mock</h1>
      <div id="Home_bottom_li">
        <p>Nothin yet Lorem ipsum dolor sit, amet consectetur</p>
      </div>
    </div> */}
    </div>
  )
}

export default Header
