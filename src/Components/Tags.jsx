import React, { useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Tags = ({ selectedTag, setSelectedTag }) => {
  const tagOptions = [
    "All",
    "Nature",
    "Colorful",
    "Adventure",
    "Architecture",
    "City",
    "Coast",
    "Golden hour",
    "Hiking",
    "Lake",
    "Landscape",
    "Modern",
    "Mountains",
    "Night",
    "Ocean",
    "Pastel",
    "Reflection",
    "Seascape",
    "Shapes",
    "Skyline",
    "Sunset",
    "Trail",
    "Tranquility",
    "Urban",
    "Water",
    "Music",
    "Mixes",
    "Cricket",
    "Podcasts",
    "Live",
    "Gaming",
    "News",
    "Movies",
    "Fashion",
    "Learning",
    "Sports",
    "Comedy",
    "Trailers",
    "Technology",
    "Cooking",
    "Travel",
    "Documentaries",
    "Animals",
    "History",
    "Art",
    "Science",
    "Education",
    "Health",
    "Fitness",
    "DIY",
    "Vlogs",
    "Animation",
    "Cars",
    "Motorcycles",
    "Photography",
    "Food",
    "Space",
    "Business",
    "Finance",
    "Real Estate",
    "Politics",
    "Environment",
    "End",
  ];

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding issues
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPosition();

    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <>
      {/* Scroll Buttons */}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="fixed left-[80px] top-[75px] z-50 p-3 bg-black/80 rounded-full text-white text-sm cursor-pointer hover:bg-gray-400/30"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      )}

      {showRight && (
        <button
          onClick={scrollRight}
          className="fixed right-[20px] top-[75px] z-50 p-3 bg-black/80 rounded-full text-white text-sm cursor-pointer hover:bg-gray-400/30"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      )}

      {/* Scrollable Tag Container */}
      <div
        ref={scrollRef}
        className="fixed left-[70px] right-0 top-[60px] flex items-center gap-3 overflow-x-auto py-3 px-2 bg-[rgba(0,0,0,0.85)] scrollbar-hide"
      >
        {tagOptions.map((tag) => (
          <div
            key={tag}
            className={`text-md text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 whitespace-nowrap transition-all duration-150 ease-in ${
              tag === selectedTag ? "bg-blue-400" : "bg-gray-800"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tags;
