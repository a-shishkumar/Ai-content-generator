"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/Templatelistsection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment  from 'moment'

interface PROPS{
    params:{
        'template-slug':string;
    }
}

function CreateNewContent(props:PROPS) { 
const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
const [loading,setLoading]=useState(false)
const [aiOutput,setAiOutput]=useState<string>('')
const {user} =useUser()
const generateAIcontent= async(FormData:any)=>{
  setLoading(true)
  const SelectedPrompt=selectedTemplate?.aiPrompt

  const FinalAIPrompt=JSON.stringify(FormData)+", "+SelectedPrompt

  const result=await chatSession.sendMessage(FinalAIPrompt)

  console.log(result.response.text())
  setAiOutput(result?.response.text())
  await saveInDb(FormData,selectedTemplate?.slug,result?.response.text())
  setLoading(false)


}

const saveInDb=async(FormData:any,slug:any,aiResp:string)=>{
  const result = await db.insert(AIOutput).values({
    FormData:FormData,
    templateSlug:slug,
    aiResponse:aiResp,
    createdBy:user?.primaryEmailAddress?.emailAddress,
    createdAt:moment().format('DD/MM/yyyy')
  })
  console.log(result)
}

  return (
    
    <div className='p-10'>
      <Link href={"/dashboard "}>
      <Button><ArrowLeft/>Back</Button>
      
      </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
              
        <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>generateAIcontent(v)}
          loading={loading}/>
        <div className='col-span-2 '>

        <OutputSection aiOutput={aiOutput}/>
        </div>

            </div>
    </div>
  )
}

export default CreateNewContent
