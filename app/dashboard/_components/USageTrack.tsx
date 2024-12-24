"use client"
import { Button } from '@/components/ui/button'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React, { useEffect } from 'react'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'

 function USageTrack() {
const {user}=useUser()


// useEffect(()=>
// {
//    user&&GetData()
// },[user])

// const GetData=async()=>{
// const result =await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
// getTotalUsage(result)
// }

// const getTotalUsage=()=>{
//     let total:number=0;
//     result.forEach(element => {
//         total=total +Number(element.aiResponse?.length)
//     });
//     console.log(total)
// }
  return (
    <div className='m-5 '>
        <div className='bg-primary text-white rounded-lg p-3'>
          <h2 className='font-medium'>  Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 rounded-full bg-white' style={{width:"35%"}}>

                </div>
            </div>
            <h2 className="text-sm my-2">350/10,000 credits used</h2>
        </div>
        <Button variant={'secondary'} className='w-full text-primary my-3'>Upgrade</Button>
    </div>
  )
}

export default USageTrack
