import Image from "next/legacy/image";
import { BiSolidStar, BiStar } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex gap-3 items-center rounded-lg w-full cursor-pointer border-b hover:shadow-lg hover:opacity-80 transition duration-200 ease-out first:border-t py-4 px-2">
      <div className="relative w-48 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          alt="info"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="grid gap-2 w-full">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 ">{location}</p>
          <BsHeart className="cursor-pointer" />
        </div>
        <p className="text-xl font-medium">{title}</p>
        <div className="border-b w-16" />
        <p className="text-gray-500 text-xs flex-grow">{description}</p>
        <div className="grid gap-1 mt-8">
          <p className="text-xl font-bold text-right lg:text-3xl">{price}</p>
          <div className="flex justify-between">
            <p className="flex items-center text-xs gap-1 text-gray-500">
              <BiSolidStar className="text-red-500 h-4" />
              {star}
            </p>
            <p className="text-xs text-gray-500 font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
