import Image from "next/legacy/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="grid gap-4 cursor-pointer items-center hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="card-img" layout="fill" className="rounded-xl" />
      </div>
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

export default MediumCard;
