import React, { useState } from "react";
import axios from "axios";

export default function DownloadComponent() {
  const [url, setUrl] = useState("");
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/download", {
        type: "audio",
        url,
      });
      setDownloadStatus(response.data);
    } catch (error) {
      setDownloadStatus("Error occurred during download");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload();
  };

  return (
    <div className="flex flex-col items-center bg-white shadow py-10 md:py-20">
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 text-center px-3 md:px-0">
        Download Video and Audio from YouTube
      </p>
      <form onSubmit={handleSubmit} className="mt-4 md:mt-8">
        <div className="bg-[#EC265C]  flex flex-col md:flex-row items-center ">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube URL"
            className="border border-gray-300 w-full px-4 md:px-40 py-2  outline-0 mb-2 md:mr-2"
          />
          <button
            type="submit"
            className="bg-[#EC265C] text-white px-4  py-2 rounded-md"
          >
            Download
          </button>
        </div>

        <p className="text-[#c76f87] text-xs md:text-sm lg:text-base text-center mt-1">
          By using our service you are accepting our Terms of Use.
        </p>
      </form>

      {loading && <div className="mt-4">Loading...</div>}
      {downloadStatus ? (
        <div className="mt-4 md:mt-8 mx-4 md:mx-20">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            Download
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={downloadStatus.thumbnail}
              className="w-full md:w-1/3 h-auto mb-4 md:mb-0"
              alt="Thumbnail"
            />

            <div className="flex flex-col md:w-2/3">
              <p className="text-white bg-[#EC265C] p-4 rounded-md text-lg font-semibold mb-2">
                {downloadStatus.title}
              </p>
              <p className="text-black text-sm md:text-base">
                {downloadStatus.description.slice(0, 350)}....
              </p>
              <p className="text-white text-sm md:text-base mt-2">
                {downloadStatus.duration_string}
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                {downloadStatus?.requested_downloads?.[0]?.requested_formats?.map(
                  (format, index) => (
                    <div key={index} className="">
                      <div className="">
                        {Object.entries(format).map(([key, value]) =>
                          key === "url" ? (
                            <div key={key}>
                              <a
                                href={value}
                                download
                                target="_blank" // Add the target attribute here
                                className="text-base md:text-lg text-white p-2 md:p-4 bg-[#EC265C] mb-2 md:mb-0"
                              >
                                {format.resolution === "audio only"
                                  ? "Download Audio"
                                  : "Download Video"}
                              </a>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
