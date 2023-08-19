import React from 'react';
import './comparison.css';

const Comparison = () => {

  // axios.get(`http://localhost:9000/products/${id}`)
  // .then(response => {
  //   setProduct(response.data);
  // })
  // .catch(error =>
  //   console.log('An error fetching from server:', error));;


  return (
    <div className='modalContainer'>
      <h4 className='comparing'>COMPARING</h4>
      <div className='comparedItem'>
        <p>Product Title</p>
        <p>Product Title</p>
      </div>
      <ul className='featureList'>
        <li>Feature</li>
        <li>Feature</li>
        <li>Feature</li>
        <li>Feature</li>
      </ul>
    </div>
  );
};

export default Comparison;