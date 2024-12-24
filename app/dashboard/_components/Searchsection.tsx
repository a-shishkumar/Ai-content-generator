import { Search } from 'lucide-react'
import React from 'react'

function Searchsection({OnSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 flex justify-center text-white items-center flex-col'>
    <h2 className='text-3xl font-bold'>Browse All Templates</h2>
    <p>What would you like to create today?</p>
    <div className='w-full flex justify-center  items-center '>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%] justify-center'>
            <Search className='text-primary '/>
            <input type="text" placeholder='search...' onChange={(event)=>OnSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />
        </div>
    </div>
  
</div>
  )
}

export default Searchsection
