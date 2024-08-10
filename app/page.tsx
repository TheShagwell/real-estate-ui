import Banner from "../components/shared/Banner";
import Categories from "../components/shared/Categories";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";


export default function Home() {
  return (
    <>
      <div className=''>
        <div className="flex flex-col">
          <Banner/>
          <Header/>
        </div>
      <Hero/>
      <Categories/>
    </div>
    </>
  );
}
