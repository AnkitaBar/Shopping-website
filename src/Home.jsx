// Home.jsx
import React from 'react';
import Carousel from './Carousel'; // Use your custom Carousel component
import ProductList from './ProductList';

const Home = () => {
  return (
    <>
    <div>
      {/* <h1>Home Page</h1> */}
      <Carousel /> {/* Render your custom Carousel component */}
      <ProductList/>
    </div>
    </>
  );
};

export default Home;
