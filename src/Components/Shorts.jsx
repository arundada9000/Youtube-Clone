import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SiYoutubeshorts } from "react-icons/si";
import PlayVideo from "./PlayVideo";

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(
    "https://images.pexels.com/photos/29698583/pexels-photo-29698583.jpeg"
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/data/shorts-data.json");
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
    <div className="mt-13">
      <div className="flex gap-2 mb-1 mt-3 align-center p-3">
        <SiYoutubeshorts
          style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
        />
        <h1 className="text-xl font-bold">Shorts</h1>
      </div>
      <div className="mt-[20px] flex w-full flex-wrap gap-2">
        {videos.map((video) => {
          const { id, src, title, views } = video;
          return (
            <div key={id} className="mb-4 h-[400px] w-[220px]">
              <img
                src={src}
                alt={title}
                className="rounded-md h-[300px] w-[220px] hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => {
                  setData(src);
                  handleClick();
                }}
              />
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400">{views} views</p>
            </div>
          );
        })}
      </div>
      <PlayVideo data={data} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Shorts;

const SkeletonLoader = () => {
  return (
    <div className="mt-[120px] flex w-full flex-wrap gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="mb-4 h-[300px] w-[220px]">
            <Skeleton height={300} borderRadius={8} />
            <div className="flex items-center gap-3 mt-3">
              <Skeleton circle width={25} height={25} />
              <div>
                <Skeleton width={180} height={250} />
                <Skeleton width={160} height={220} />
                <Skeleton width={140} height={200} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
