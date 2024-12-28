import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loaderfinish, setLoaderfinish] = useState(false);
  return (
    <div className="relative ">
      <Loader func={setLoaderfinish} />
      <Navbar />
      <Landing finish={loaderfinish} />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
