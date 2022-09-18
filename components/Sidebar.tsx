import React from 'react'
import {
  HomeIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
      <img className="m-3 h-10 w-10" src="https://links.papareact.com/drq" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={BellIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={BookmarkIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
    </div>
  )
}

export default Sidebar
