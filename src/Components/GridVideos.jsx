import React, { useState, useEffect } from "react";
import PlayVideo from "./PlayVideo";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SkeletonLoader from "./SkeletonLoader";

const GridVideos = () => {
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
        const response = await fetch("/data/videos-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error) return <div>Error: {error}</div>;

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="flex w-full flex-wrap gap-6">
      {videos.map((video) => {
        const { id, creator, src, title, channel, views, date } = video;
        return (
          <div key={id} className="mb-4  h-[300px] w-[330px]">
            <img
              src={src}
              alt={title}
              className="rounded-xl h-[200px] w-full max-w-[330px] max-h-[200px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
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
              <div className="flex flex-col">
                <h3 className="mt-2 text-md font-semibold">{title}</h3>
                <p className="text-sm text-gray-400 flex gap-5">
                  {creator} <IoIosCheckmarkCircle />
                </p>
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

export default GridVideos;
