import React from 'react'
import { Refresh } from '@mui/icons-material'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <div className='col-span-7 border-x lg:col-span-5'>
      <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl front-bold'>Home</h1>
        <Refresh className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <Tweetbox />
      </div>
    </div>
  )
}

export default Feed
