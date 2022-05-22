import './App.css';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import JoinUs from './components/joinus/JoinUs';
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
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
