import React from 'react'
import Header from './_components/Home'
import Link from 'next/link'
const layout = ({child}) => {
  return (
    <div>
     <Header/>
     {child}
    </div>
  )
}

export default layout
