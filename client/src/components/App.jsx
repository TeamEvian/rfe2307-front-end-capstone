import React, { useState, useEffect } from "react";
import QuestionsList from "../components/questionsAnswers/QuestionsList.jsx";
import RelatedProducts from './relatedProducts/relatedProducts.jsx';
import RatingReviews from './RatingReviews/ReviewsList.jsx';
import ProductDetails from './productdetails/index.jsx';

const App = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      React is running! Great job team! Now go to work.....
      </h1>
      <ProductDetails />
      {/* <QuestionsAnswers /> */}
      {/* <RatingReviews /> */}
      {/* <RelatedProducts /> */}
    </div>
  );
};

export default App;
