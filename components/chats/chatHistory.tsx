import React from 'react'
import { Button } from '../ui/button'

function ChatHistory({ heading,messages }:{ heading: String, messages: String }) {
  return (
    <div className='w-full px-4 pb-2 mb-4 h-fit flex justify-between items-center border-b'>
        <div className='w-[90%] flex items-center justify-start space-x-2 text-ellipsis overflow-hidden truncate'>
            <p className='text-gray-900 font-semibold '>{heading}</p>
            <p className='font-normal text-ellipsis overflow-hidden'>{messages}</p>
        </div>
        <Button className='bg-transparent border border-[#97C3F0] text-[#0B6BCB] hover:bg-transparent'>Load Chat</Button>
    </div>
  )
}

export default ChatHistory