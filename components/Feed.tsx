import { useState } from 'react'
import { Refresh } from '@mui/icons-material'
import Tweetbox from './Tweetbox'
import { Tweet } from '../typings'
import TweetComponet from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProps }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps)

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing..')
    const tweets = await fetchTweets()
    setTweets(tweets)

    toast.success('Feed is updated!', {
      id: refreshToast
    })
  }

  return (
    <div className="col-span-7 border-x max-h-screen overflow-scroll scrollbar-hide lg:col-span-5 ">
      <div className="flex items-center justify-between ">
        <h1 className="p-5 pb-0 text-xl front-bold">Home</h1>
        <Refresh
          onClick={handleRefresh}
          className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <Tweetbox setTweets={setTweets}/>
      </div>

      <div>
        {tweets.map((tweet) => (
          <TweetComponet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
