"use client"
import React, { useState } from 'react'
import Searchsection from './_components/Searchsection'
import Templatelistsection from './_components/Templatelistsection'

function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>()
  return (
    <div>
      <Searchsection OnSearchInput={(value:string)=>setUserSearchInput(value)} />
      <Templatelistsection usersearchinput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
