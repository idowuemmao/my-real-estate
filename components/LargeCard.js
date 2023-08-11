import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative py-8 cursor-pointer">
      <div className="relative h-96 w-full ">
        <Image
          src={img}
          layout="fill"
          alt="large"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute z-20 top-24 left-8 md:left-12">
        <h3 className=" text-3xl md:text-4xl mb-3 w-48 md:w-64 font-semibold">{title}</h3>
        <p className="text-xs md:text-base">{description}</p>
        <button className="text-sm md:text-sm text-white bg-gray-800 px-4 py-2 rounded-lg mt-5 hover:shadow-xl active:scale-90 font-medium transition duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
