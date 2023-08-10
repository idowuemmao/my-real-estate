
const Explore = () => {
   
  return (
    <div className='pt-6'>
      <h1>Explore Nearby</h1>
      <div>
        <div>

        </div>
        <div> </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Explore


//static rendering and server side rendering

export async function getStaticProps() {
    const exploreData = (await fetch('https://links.papareact.com/pyp'))
    .then(res => res.json());
    console.log(exploreData);
}