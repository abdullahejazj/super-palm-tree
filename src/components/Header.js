import React from 'react'
import Image from 'next/image'
import logo from '../assets/img/logo.png'
const Header = () => {
  return (
    <div className='mr-60 ml-60  flex justify-between item-center py-4'>
        <div >
        <Image
      src={logo}
      width={200}
      height={200}
      alt="Picture of the author"
    />
        </div>
        <div className='flex gap-5 items-center'>
            <div className='cursor-pointer'>YouTube Downloader</div>
            <div className='cursor-pointer'>YouTube to MP3</div>
        </div>
    </div>
  )
}

export default Header