import React from 'react';
import "../src/scss/main.scss"
import Bedroom from './components/Bedroom';
import Card from './components/Card';
import CategoryDeatils from './components/CategoryDeatils';
import CheckCart from './components/CheckCart';
import Details from './components/Details';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';
import TopRating from './components/TopRating';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <CategoryDeatils/>
      <Card/>
      <Details/>
      <TopRating/>
      <NewsLetter/>
      <Bedroom/>
      <CheckCart/>
    </div>
  );
};

export default App;