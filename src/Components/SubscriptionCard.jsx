import React, { useState, useEffect } from "react";
import PlayVideo from "./PlayVideo";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SkeletonLoader from "./SkeletonLoader";

const SubscriptionCard = () => {
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
    <div className="flex flex-col w-full gap-5 max-w-[1000px]">
      {videos.map((video) => {
        const { id, creator, src, title, channel, views, date, description } =
          video;
        return (
          <div
            key={id}
            className="flex flex-col flex-grow w-full h-[250px] gap-1 border-b-1 border-gray-200/50"
          >
            <div className="w-full flex flex-grow gap-5 items-center">
              <img
                src={src}
                alt={title}
                className="w-[30px] h-[30px] rounded-full"
              />
              <h1 className="text-lg font-bold">{creator}</h1>
            </div>
            <div className="flex flex-grow w-full h-[190px] gap-5">
              <img
                src={src}
                alt={title}
                className="rounded-lg h-[170px] w-[230px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => {
                  setData(src);
                  handleClick();
                }}
              />
              <div className="flex">
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400">{channel}</p>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    {creator} <IoIosCheckmarkCircle /> • {views} views • {date}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">{description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <PlayVideo data={data} open={open} setOpen={setOpen} />
    </div>
  );
};

export default SubscriptionCard;
