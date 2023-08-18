import Image from "next/legacy/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex gap-4 cursor-pointer items-center hover:scale-110 transition duration-200 ease-out hover:bg-gray-100 rounded-xl">
      <Image
        src={img}
        alt="card-img"
        width={50}
        height={50}
        className="rounded-xl"
      />
      <div className="min-w-max ">
        <h2 className="text-sm">{location}</h2>
        <p className="text-xs text-gray-800">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
