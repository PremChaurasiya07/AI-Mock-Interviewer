import React from 'react'
import Header from './_components/Home'
import { SignIn } from '@clerk/nextjs'
const dashboard = () => {
  return (
    <div>
<SignIn />
    </div>
  )
}

export default dashboard
