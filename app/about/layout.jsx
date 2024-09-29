import React from 'react'
import Navbar from '../dashboard/_components/Navbar'
import Link from 'next/link'
import About from './About'
const layout = ({child}) => {
  return (
    <div>
<Navbar/>
<div style={{marginTop:'-1vh'}}><About/></div>
  
    </div>
  )
}

export default layout
