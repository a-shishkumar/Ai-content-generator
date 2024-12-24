"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import USageTrack from './USageTrack'

function SideNav() {

    const menulist=[{
        name:'Home',
        icon:Home,
        path:'/dashboard'
    },
    {
        name:'History',
        icon:FileClock,
        path:'/dashboard/history'
    },
    {
        name:'Billing',
        icon:WalletCards,
        path:'/dashboard/billing'
    },
    {
        name:'Setting',
        icon:Settings,
        path:'/dashboard/settings'
    }
]

const path=usePathname();
useEffect(()=>{
    console.log(path)
},[]    )

  return (
    <div className='h-screen relative shadow-sm border p-5 bg-white '>
     <div className="flex justify-center ">
     <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
     </div>
     <hr className='my-6 border'/>

     <div className='mt-3'>
        {menulist.map((menu,index)=>(
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center  ${path==menu.path&& 'bg-primary text-white '} `}>
                <menu.icon className='h-6 w-6 '/>
                <h4>{menu.name}</h4>
            </div>)
        )}
     </div>

     <div className='absolute bottom-10 left-0 w-full '>
        <USageTrack/>
     </div>
    </div>
  )
}

export default SideNav