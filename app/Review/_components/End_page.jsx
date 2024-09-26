'use client'
import React from 'react'
import {Mockresp,id} from '../../dashboard/_components/Form'
import { useEffect } from 'react'
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm/expressions';
const End_page = () => {
    useEffect(() => {
      
      GetInterviewDetails();
      console.log(id)
    }, [])
    
    const GetInterviewDetails=async(info)=>{
        const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,'c8bebc02-720f-456c-8c5a-9122d338dbc8')) 
        const mockjson=JSON.parse(result[0].jsonMockResp);
        console.log(mockjson);
    }
   
  return (
    <div>
      
    </div>
  )
}

export default End_page
