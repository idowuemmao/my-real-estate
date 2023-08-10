// import Image from "next/image";
import { TbWorld, TbMenu2, TbUser, TbSearch } from "react-icons/tb";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg p-5 grid grid-cols-3 md:px-10 items-center  ">
      {/* left */}
      <div className="relative flex h-10 items-center cursor-pointer my-auto">
        {/* <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        /> */}
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 px-4 md:shadow-lg ">
        <input
          type="text"
          placeholder="Start Your Search"
          className="text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent flex-grow"
        />
        <TbSearch className="hidden md:inline-flex w-8 h-8 md:mx-2 text-white cursor-pointer p-2 bg-[#ff5a60] rounded-full " />
      </div>

      {/* right */}
      <div className="flex items-center justify-end text-gray-500 gap-4">
        <p className="font-semibold hidden lg:block cursor-pointer">
          Become a host
        </p>
        <TbWorld className="lg:block" />
        <div className="flex  items-center gap-2 rounded-full px-4 py-2 border text-xl shadow-lg">
          <TbMenu2 className="cursor-pointer" />
          <TbUser className="cursor-pointer bg-gray-700 text-white rounded-full p-1 text-3xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

// react interviews and questions
// rest, html,css, javascript, git, typescript interview
