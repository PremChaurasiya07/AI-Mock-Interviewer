import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { useState } from 'react';
import './Form.css'
const Form = ({block}) => {
  //console.log(block);
  const {user}=useUser();
    return (
    <div style={(block)?{display:"block",position:"none"}:{display:"none"}} id='form' >
      <form style={{position:"absolute"}}>
      <button id='close' onClick={()=>(block=false)} >X</button>
      <h1>hii</h1>
      <hr style={{width:"36vw"}} />
        <label htmlFor="name">Enter Name</label><input style={{border:"1px solid black"}} type="text"/><br />
        <label htmlFor="exp">Enter the Experience</label> <input type="text" /><br />
        <label htmlFor="role">Enter the role</label> <input type="text" /><br />
        <button id='submit'>Submit</button>
        <hr style={{width:"36vw",marginTop:"6vw"}} />  
      </form> 
                               
    </div>
  )
}

export default Form
