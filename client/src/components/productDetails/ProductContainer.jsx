import React, { useEffect, useState} from 'react';
import ImageList from './ImageList.jsx';
import Detail from './Detail.jsx';

export default function ProductContainer () {
  //this container has twp child
  //gallery and detail
  console.log('where are thou');
  return (
    <div>
      <ImageList />
      <Detail />
    </div>
  );
}