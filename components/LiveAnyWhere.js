import LiveData from "./LiveData";
import MediumCard from "./MediumCard";

const LiveAnyWhere = () => {
  const liveElement = LiveData.map(({ img, title }) => (
    <MediumCard key={img} img={img} title={title} />
  ));
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-8">Live Anywhere</h2>
      <div className="flex gap-6 overflow-scroll scrollbar-hide py-4">
        {liveElement}
      </div>
    </div>
  );
};

export default LiveAnyWhere;

// export async function getStaticProps() {
//   const cardData = await fetch("https://links.papareact.com/zp1").then((resp) =>
//     resp.json()
//   );
//   console.log({ cardData });
//   return cardData;
// }
