import Explore from '../components/Explore.js'
import Banner from '../components/Banner.js'
import Header from '../components/Header.js'

export default function Home() {
  return (
    <main className=" ">
      <Header />
      <Banner />
      <section className='max-w-5xl border-4 mx-auto px-8 sm:px-16'>
        <Explore/>
      </section>
    </main>
  )
}
