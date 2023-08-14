"use client";
import LiveData from "./LiveData";
import MediumCard from "./MediumCard";
import { useState, useEffect, useCallback } from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  const exploreData = await res.json();
  return { props: { exploreData } };
};

// export async function getStaticProps() {
//   const exploreData = await fetch("https://swapi.dev/api/people").then((res) =>
//     res.json()
//     const repo = await res.json()
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

const LiveAnyWhere = ({ exploreData }) => {
  // console.log(exploreData);
  // const getData = useCallback(async () => {
  //   try {
  //     const resp = await getStaticProps();
  //     console.log(resp, "glorry ");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  // useEffect(() => {
  //   getStaticProps();
  // }, []);
  // const liveElement = LiveData.map(({ img, title }) => (
  //   <MediumCard key={img} img={img} title={title} />
  // ));
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-8">Live Anywhere</h2>
      <div className="flex gap-6 overflow-scroll scrollbar-hide p-4 -ml-4">
        {exploreData?.map((item) => console.log(item))}
      </div>
    </div>
  );
};

export default LiveAnyWhere;

// export async function getStaticProps() {
//   try {
//     const response = await fetch("https://www.jsonkeeper.com/b/VHHT", {
//       // mode: "no-cors",
//     });

//     console.log(response, "resp");

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const exploreData = await response.json(); // Parse response as JSON

//     return {
//       props: {
//         exploreData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         exploreData: null,
//       },
//     };
//   }
// }
