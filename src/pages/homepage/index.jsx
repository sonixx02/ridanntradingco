import React from 'react';
import Header from '../../components/ui/Header';
import Carousel from '../../components/Carousel';
import PathwaySection from './components/PathwaySection';
import InventoryTicker from './components/InventoryTicker';
import FeaturedProducts from './components/FeaturedProducts';
import IndustryNews from './components/IndustryNews';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';
import { carouselSlides } from '../../data/carousel';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <Header />
      
      <main>
        <Carousel slides={carouselSlides} />
        <PathwaySection />
        {/* <InventoryTicker /> */}
        <FeaturedProducts />
        {/* <IndustryNews />
        <TrustSignals /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;