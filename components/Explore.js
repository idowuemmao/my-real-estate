import React from "react";

const Explore = ({ exploreData }) => {
  return (
    <div className="pt-6">
      <h1>Explore Nearby</h1>
    </div>
  );
};

export default Explore;

//static rendering and server side rendering
//here is where
// export async function getStaticProps() {
//   const response = await fetch("https://links.papareact.com/pyp");
//   const exploreData = await response.json();
//   console.log(exploreData);
//   return {
//     props: { exploreData },
//   };
// }
export function getStaticProps() {
  const response = fetch("https://links.papareact.com/pyp");
  const exploreData = response.json();
  console.log([exploreData]);
}
