import React from 'react'
import Header from './_components/Home'
const layout = ({child}) => {
  return (
    <div>
     <Header/>
     {child}
    </div>
  )
}

export default layout
