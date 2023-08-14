"use client";
import Image from "next/image";
import { useState } from "react";
import { TbWorld, TbMenu2, TbUser, TbSearch, TbUsers } from "react-icons/tb";
import "react-date-range/dist/styles.css"; //main styles file
import "react-date-range/dist/theme/default.css"; //theme css files
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    key: "selection",
    startDate: startDate,
    endDate: endDate,
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg p-5 grid grid-cols-3 md:px-10 items-center  ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex h-10 items-center cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 px-2 md:shadow-lg ">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="text-sm text-gray-700 pl-2 placeholder:text-gray-400 placeholder:text-center hidden sm:flex outline-none bg-transparent flex-grow"
        />
        <TbSearch className="hidden md:inline-flex text-white cursor-pointer md:mx- p-1 text-2xl bg-[#ff5a60] rounded-full" />
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff5a60"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-3xl flex-grow font-semibold">
              Number of Guests:
            </h2>
            <TbUsers className="text-2xl" />
            <input
              value={noOfGuests}
              min={1}
              onChange={(event) => setNoOfGuests(event.target.value)}
              type="number"
              className="w-12 pl-2 outline-none text-lg text-[#ff5a60]"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            {/* <button onClick={search} className="flex-grow text-[#ff5a60]">
              Search
            </button>o */}
            <Link
              href={{
                pathname: "/search",
                query: {
                  location: searchInput,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  noOfGuests,
                },
              }}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// react interviews and questions
// rest, html,css, javascript, git, typescript interview
