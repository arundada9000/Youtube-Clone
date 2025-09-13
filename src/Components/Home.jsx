import React, { useState } from "react";
import Tags from "./Tags";
import Videos from "./Videos";
import Shorts from "./Shorts";
const Home = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  return (
    <>
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Videos selectedTag={selectedTag} />
      <Shorts />
      <Videos selectedTag={selectedTag} />
      <Shorts />
      <Videos selectedTag={selectedTag} />
      <Shorts />
    </>
  );
};
export default Home;
