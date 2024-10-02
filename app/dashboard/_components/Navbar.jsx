import React from 'react'
import { UserButton } from '@clerk/nextjs'
import './Home.css'
import Link from 'next/link'
const Navbar = () => {
  return (
       <nav  id='Home_nav'>
        <img src="" alt="" style={{marginLeft:'6vw'}}/>
        <ul>
            <Link href='/dashboard'><li>Dashboard</li></Link>
           <Link href='/about'><li>About</li></Link> 
        </ul>
        <div style={{paddingRight:'2vw',paddingTop:"2vh"}}>
       <UserButton/>  
        </div>
        </nav>
  )
}

export default Navbar
