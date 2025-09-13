import { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { MdOutlineSettings } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const Notifications = ({ notificationOpen }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("/data/videos-data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNotifications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading && notificationOpen) return <SkeletonLoader />;
  if (error && notificationOpen) return <div>Error: {error}</div>;

  return (
    <div
      className={`flex flex-col gap-2 min-w-108 min-h-screen overflow-y-auto text-white rounded shadow-lg1 bg-gray-800/90
    ${notificationOpen ? "flex" : "hidden"}
    `}
    >
      <div className="p-4 flex justify-between items-center border-b-1 border-white/50">
        <h1>Notifications</h1>
        <MdOutlineSettings style={{ fontSize: "20px", cursor: "pointer" }} />
      </div>
      {notifications.map((notification) => {
        const { id, src, title, creator, date } = notification;
        return (
          <div key={id} className="flex items-center gap-4 p-4">
            <div className="">
              <img
                src={src}
                alt={title}
                className="rounded-full h-[50px] w-[50px]"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm text-left">{title}</p>
              <p className="text-sm text-left">{creator}</p>
              <span className="text-sm text-left"> {date} </span>
            </div>
            <div className="flex items-center">
              <img src={src} alt={title} className="w-25 h-10" />
            </div>
            <div className="flex items-start justify-center">
              <CiMenuKebab
                style={{ font: "bold", cursor: "pointer", fontSize: "20px" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
