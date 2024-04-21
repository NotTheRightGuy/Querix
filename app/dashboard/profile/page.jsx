import Sidebar from '@/components/ui/sidebar'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Profile() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <Sidebar />
        <UserProfile />
    </div>
  )
}

export default Profile