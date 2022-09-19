import React from 'react'
import { Refresh } from '@mui/icons-material'
import Tweetbox from './Tweetbox'
import { Tweet } from '../typings'
import TweetComponet from '../components/Tweet'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl front-bold">Home</h1>
        <Refresh className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <Tweetbox />
      </div>

      <div>
        {tweets.map((tweet) => (
          <TweetComponet key={tweet._id} tweet={tweet}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
