import React from 'react'
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/Popular';
import Offer from '../components/offer/Offer';
import NewCollection from '../components/newCollection/NewCollection';
import NewsLetter from '../components/newsLetter/NewsLetter';
import Footer from '../components/footer/Footer';
function Shop() {
  return (
    <div>
      
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    
    </div>
  )
}

export default Shop;
