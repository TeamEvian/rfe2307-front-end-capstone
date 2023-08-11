import React, { useEffect, useState} from 'react';
import Header from './Header.jsx';
import ProductContainer from './ProductContainer.jsx';

export default function ProductDetails () {

  console.log('where are thou');
  return (
    <div>
      <Header />
      <ProductContainer />
    </div>
  );
}