import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LiveAnyWhere from "../components/LiveAnyWhere";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div className="w-full ">
      <Header />
      <Banner />
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <Explore />
        <LiveAnyWhere />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
