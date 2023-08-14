"use client";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import { format } from "date-fns";
import InfoData from "../../components/InfoData";
import InfoCard from "../../components/InfoCard";

export default function Search() {
  const InfoElement = InfoData.map(
    ({ img, price, description, total, location, title, long, lat, star }) => (
      <InfoCard
        img={img}
        key={price}
        price={price}
        description={description}
        total={total}
        long={long}
        lat={lat}
        location={location}
        title={title}
        star={star}
      />
    )
  );
  const searchParams = useSearchParams();

  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuests = searchParams.get("noOfGuests");

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-12">
          <p className="text-sm">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:flex mb-5 text-gray-800 whitespace-nowrap gap-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="grid gap-4">{InfoElement}</div>
        </section>
      </main>
    </div>
  );
}
