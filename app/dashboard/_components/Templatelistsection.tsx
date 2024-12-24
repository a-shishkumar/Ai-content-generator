import React, { useEffect, useState } from 'react'
// For default export
import Templates from '@/app/(data)/Templates';

import TemplateCard from './TemplateCard'




export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}


function Templatelistsection({usersearchinput}:any) {
  const[templateList,setTemplateList]=useState(Templates)
  useEffect(()=>{
    if(usersearchinput){
      const filterData=Templates.filter((item)=>item.name.toLowerCase().includes(usersearchinput.toLowerCase()));
       setTemplateList(filterData)
    }
    else{
      setTemplateList(Templates)
    }
  },
[usersearchinput])

  return (
  <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 p-10 '>
    {templateList.map((item:TEMPLATE,index:number)=>
    <TemplateCard {...item}/>
    )}

  </div>
  )
}

export default Templatelistsection
