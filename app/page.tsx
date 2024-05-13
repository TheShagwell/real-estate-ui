import Banner from "./components/Banner";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <>
      <div className=''>
        <div className="flex flex-col">
          <Banner/>
          <Header/>
        </div>
      <Hero/>
    </div>
    </>
  );
}
