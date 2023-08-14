import Explore from "../components/Explore";
import Banner from "../components/Banner";
import Header from "../components/Header";
// import LiveAnyWhere from "../components/LiveAnyWhere";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ repo }) {
  console.log([repo]);
  return (
    <div className="w-full ">
      <Header />
      <Banner />
      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <Explore />
        {/* <LiveAnyWhere /> */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <footer className="w-full bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}

// export async function getServerSideProps() {
//   const exploreData = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
//     (res) => res.json()
//   );
//   return { props: { exploreData } };
// }
// export async function getServerSideProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//   return { props: { exploreData } };
// }

export const getStaticProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const repo = await res.json();
  // console.log(repo);
  return { props: { repo: repo } };
};

// export default function Page({ repo }) {
//   return repo.stargazers_count
// }
