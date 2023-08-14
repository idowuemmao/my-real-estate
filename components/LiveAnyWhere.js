"use client";
import LiveData from "./LiveData";
import MediumCard from "./MediumCard";


const LiveAnyWhere = () => {
  
  const liveElement = LiveData.map(({ img, title }) => (
    <MediumCard key={img} img={img} title={title} />
  ));
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-8">Live Anywhere</h2>
      <div className="flex gap-6 overflow-scroll scrollbar-hide p-4 -ml-4">
        {liveElement}
      </div>
    </div>
  );
};

export default LiveAnyWhere;
