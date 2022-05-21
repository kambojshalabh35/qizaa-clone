import './App.css';
import Brands from './components/brands/Brands';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Offers from './components/offers/Offers';
import ShopNow from './components/shopnow/ShopNow';
import WhyChooseUs from './components/whychooseus/WhyChooseUs';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <ShopNow />
      <WhyChooseUs />
      <Brands />
    </>
  );
}

export default App;
