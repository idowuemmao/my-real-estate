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
     <div  className="flex items-center relative">
     <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" 
        className="w-10 h-10 p-1 bg-white rounded-full absolute z-20 text-black left-5 cursor-pointer">
            <path 
            strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>

      <div className=" w-full flex gap-6 overflow-scroll scrollbar-hide p-4 -ml-4">
          {liveElement}
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" 
        className="w-10 h-10 p-1 bg-white rounded-full absolute z-20 text-black right-5 cursor-pointer">
          <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
     </div>
    </div>
  );
};

export default LiveAnyWhere;
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
