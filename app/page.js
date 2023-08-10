import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LiveAnyWhere from "../components/LiveAnyWhere";

export default function Home(props) {
  return (
    <div className="w-full ">
      <Header />
      <Banner />
      <main className="max-w-5xl border-4 mx-auto px-8 sm:px-16">
        <Explore />
        <LiveAnyWhere />
      </main>
    </div>
  );
}
