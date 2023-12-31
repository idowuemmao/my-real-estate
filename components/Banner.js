import Image from "next/legacy/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className=" text-sm">Not sure where to go? Perfect</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-lg rounded-full my-3 hover:shadow-xl active:scale-90 font-bold transition duration-200">
          Im flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
