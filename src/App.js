import React from 'react';
import "../src/scss/main.scss"
import Card from './components/Card';
import CategoryDeatils from './components/CategoryDeatils';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <CategoryDeatils/>
      <Card/>
    </div>
  );
};

export default App;