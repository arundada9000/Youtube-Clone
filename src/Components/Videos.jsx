import React, { useState, useEffect } from "react";
import PlayVideo from "./PlayVideo";
import SkeletonLoader from "./SkeletonLoader";

const Videos = ({ selectedTag }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [data, setData] = useState(
    "https://images.pexels.com/photos/29698583/pexels-photo-29698583.jpeg"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/videos-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const filteredVideos =
          selectedTag === "All"
            ? data
            : data.filter((video) =>
                video.tags.includes(selectedTag.toLowerCase())
              );
        setVideos(filteredVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [selectedTag]);

  if (loading) return <SkeletonLoader />;
  if (error) return <div>Error: {error}</div>;
  if (videos.length === 0) {
    return (
      <div className=" mt-[120px] text-center text-gray-500">
        No videos found for {selectedTag}.
      </div>
    );
  }

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="mt-[120px] flex w-full flex-wrap gap-6">
      {videos.map((video) => {
        const { id, src, title, channel, views, date } = video;
        return (
          <div key={id} className="mb-4  h-[300px] w-[330px]">
            <img
              src={src}
              alt={title}
              className="rounded-md h-[200px] w-full max-w-[330px] max-h-[200px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => {
                setData(src);
                handleClick();
              }}
            />
            <div className="flex items-center gap-3">
              <img
                src={src}
                alt={title}
                className="rounded-full h-[25px] w-[25px]"
              />
              <div>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-400">{channel}</p>
                <p className="text-sm text-gray-400">
                  {views} views • {date}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <PlayVideo data={data} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Videos;
