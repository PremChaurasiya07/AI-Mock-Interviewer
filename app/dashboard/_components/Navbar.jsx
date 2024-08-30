import React from 'react'
import { UserButton } from '@clerk/nextjs'
import './Home.css'
import Link from 'next/link'
const Navbar = () => {
  return (
       <nav  id='Home_nav'>
        <img src="/" alt="hii" style={{marginLeft:'6vw'}}/>
        <ul>
            <Link href='/dashboard'><li>Dashboard</li></Link>
           <Link href='/Interviewpage'><li>About</li></Link> 
            <li>How it works</li>
        </ul>
        <div style={{display:"flex",alignItems:"center"}}>
            <div style={{marginRight:"20px"}}>
            Toggle
            </div>
        <div style={{marginRight:"10px"}}>
        <UserButton/>  
        </div>
        </div>
        </nav>
  )
}

export default Navbar
