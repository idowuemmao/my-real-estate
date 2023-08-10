import Image from "next/image";

const SmallCard = ({ img, title }) => {
  return (
    <div className="grid gap-4 cursor-pointer items-center hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt="card-img"
          layout="fill"
          // width={500}
          // height={500}
          className="rounded-xl"
        />
      </div>
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

export default SmallCard;
