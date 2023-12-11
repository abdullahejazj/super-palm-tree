import Image from 'next/image'
import { Inter } from 'next/font/google'
import DownloadComponent from '@/components/DownloadComponent'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
<Layout>
  <DownloadComponent/>
  
    <div className='flex flex-col gap-4 my-10 justify-center items-center'>
      <p className='text-2xl'>YouTube Video Downloader</p>
      <p>Y2mate allows you to convert & download video from YouTube, Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD quality. Y2mate supports downloading all video formats such as: MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily download for free thousands of videos from YouTube and other websites.</p>
    </div>

    <div className='flex gap-10 my-20'>
      <div>
        <p className='font-bold'>Instructions</p>
        <p>1. Search by name or directly paste the link of video you want to convert</p>
        <p>2. Click "Start" button to begin converting process</p>
        <p>3. Select the video/audio format you want to download, then click "Download" button</p>
      </div>
      <div>
        <p className='font-bold'>Features</p>
        <p>Unlimited downloads and always free</p>
        <p>• High-speed video converter</p>
        <p>• No registration required</p>
      </div>
      
    </div>
</Layout>
 </>
  )
}
