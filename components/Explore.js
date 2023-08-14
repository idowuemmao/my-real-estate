import ExploreData from "./ExploreData";
import SmallCard from "./SmallCard";

const Explore = () => {
  const exploreElement = ExploreData?.map((items) => (
    <SmallCard
      key={items.img}
      img={items.img}
      location={items.location}
      distance={items.distance}
    />
  ));

  return (
    <div className="py-6 ">
      <h1 className="font-bold text-xl mb-8">Explore Nearby</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {exploreElement}
      </div>
    </div>
  );
};

export default Explore;

