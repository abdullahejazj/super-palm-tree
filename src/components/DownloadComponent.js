import React, { useState } from 'react';
import axios from 'axios';

export default function DownloadComponent() {
  const [url, setUrl] = useState('');
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true); // Set loading to true when the request starts
      const response = await axios.post('/api/download', { type: 'audio', url });
      setDownloadStatus(response.data);
    } catch (error) {
      setDownloadStatus('Error occurred during download');
    } finally {
      setLoading(false); // Set loading to false after the request completes (either success or error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload();
  };

  return (
    <div className="flex flex-col items-center bg-white shadow py-20">
      <p className='text-3xl'>Download Video and Audio from YouTube</p>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className='bg-[#EC265C] p-2'> <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="border border-gray-300 p-2 px-40  mr-2 outline-0 "
        />
        <button type="submit" className="bg-[#EC265C] text-white px-4 py-2 rounded-md">
          Download
        </button></div>
       
        <p className='text-[#c76f87] font-[4px] text-center mt-1'>By using our service you are accepting our Terms of Use.</p>
      </form>

      {loading && <div className="mt-4">Loading...</div>}
      {downloadStatus ? (
        <div className="mt-8 m-20">
          <h2 className="text-lg font-semibold">Download Status:</h2>
          <div className='flex'>
            <img src={downloadStatus.thumbnail} className='w-40'/>
            <div>
            <p className="mt-2 border border-gray-300 p-4 rounded-md">{downloadStatus.title}</p>
            <p className='text-white'>{downloadStatus.description}</p>
            <p className='text-white'>{downloadStatus.duration_string}</p>
            <div className='flex gap-10'>
                <div className='bg-blue-500 text-white p-5 cursor-pointer'>Download</div>
                <div className='bg-blue-500 text-white p-5 cursor-pointer'>Download</div>
             </div>
                </div>
              
           
          </div>
         
          {downloadStatus?.requested_downloads?.[0]?.requested_formats?.map((format, index) => (
      <div key={index} className="border border-gray-300 p-4 my-4 rounded-md">
    <h3 className="font-semibold text-lg mb-2">Format {index + 1}</h3>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(format).map(([key, value]) => (
        key === 'url' ? (
          <div key={key}>
            <p className="text-sm font-semibold text-gray-600">{key}</p>
            <a
              href={value}
              download
              className="text-base text-blue-500 hover:underline"
            >
              {value}
            </a>
          </div>
        ) : null
      ))}
    </div>
  </div>
))}

        </div>
      ) : ""}
    </div>
  );
}
