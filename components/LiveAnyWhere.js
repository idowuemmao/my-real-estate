"use client";
import { useEffect, useRef } from "react";
import LiveData from "./LiveData";
import MediumCard from "./MediumCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const LiveAnyWhere = () => {
  const liveElement = LiveData.map(({ img, title }) => (
    <MediumCard key={img} img={img} title={title} />
  ));

  const tabMenuRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenuRef.current.scrollLeft);
    let scrollableWidth = Math.ceil(
      tabMenuRef.current.scrollWidth - tabMenuRef.current.clientWidth
    );
    btnLeftRef.current.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRightRef.current.style.display =
      scrollableWidth > scrollLeftValue ? "block" : "none";
  };

  const handleLeftClick = () => {
    if (tabMenuRef.current) {
      tabMenuRef.current.scrollLeft -= 100;
    }
    IconVisibility();
  };

  const handleRightClick = () => {
    if (tabMenuRef.current) {
      tabMenuRef.current.scrollLeft += 100;
    }
    IconVisibility();
  };
  useEffect(() => {
    IconVisibility(); // Initial check

    if (tabMenuRef.current) {
      tabMenuRef.current.addEventListener("scroll", IconVisibility);
    }

    return () => {
      if (tabMenuRef.current) {
        tabMenuRef.current.removeEventListener("scroll", IconVisibility);
      }
    };
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-8">Live Anywhere</h2>
      <div className="flex items-center relative group">
        <button ref={btnLeftRef} onClick={handleLeftClick} className="">
          <GrLinkPrevious className="hidden group-hover:block hover:scale-90 hover:shadow-xl w-8 h-8 p-1 bg-white rounded-full absolute z-20 text-black left-5 cursor-pointer hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out" />
        </button>
        <div
          ref={tabMenuRef}
          className="tabMenu w-full flex gap-6 overflow-scroll scrollbar-hide p-4 -ml-4 transition duration-500 ease-in-out "
        >
          {liveElement}
        </div>
        <button onClick={handleRightClick} ref={btnRightRef} className="">
          <GrLinkNext className="hidden group-hover:block hover:scale-90 hover:shadow-xl w-8 h-8 p-1 bg-white rounded-full absolute z-20 text-black right-10 cursor-pointer hover:bg-yellow-500 hover:text-white transition duration-500 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default LiveAnyWhere;
