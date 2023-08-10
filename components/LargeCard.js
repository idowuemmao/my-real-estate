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
      <div className="absolute z-20 top-24 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-800 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </div>
  );
};

export default LargeCard;
