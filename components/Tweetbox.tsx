import { useState } from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

function Tweetbox() {
  const [input, setInput] = useState<string>('')

  console.log(input)

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://pbs.twimg.com/media/FEaFK4OWUAAlgiV?format=jpg&name=900x900"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happeing?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              <ImageOutlinedIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchOutlinedIcon className="h-5 w-5" />
              <EmojiEmotionsOutlinedIcon className="h-5 w-5" />
              <CalendarMonthOutlinedIcon className="h-5 w-5" />
              <LocationOnOutlinedIcon className="h-5 w-5" />
            </div>

            <button disabled={!input} className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tweetbox
