import Header from "../../components/Header";

export default function search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow px-6 pt-12">
          <p className="text-sm">300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden md:flex mb-5 text-gray-800 whitespace-nowrap gap-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
    </div>
  );
}
