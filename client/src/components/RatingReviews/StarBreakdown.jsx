import React, { useState, useEffect } from 'react';

const StarBreakdown = ({ ratings, total, filters, setFilters }) => {
  // optimization -> fetch ALL reviews based on total

  const handleSort = (star) => {
    if (!filters.includes(star)) {
      setFilters(prevFilters => prevFilters.concat(star));
    } else {
      setFilters(prevFilters => {
        return prevFilters.filter(f => f !== star);
      });
    }
  };

  const handleRemove = () => {
    setFilters([]);
  };

  const bar = (val) => {
    return (
      <div key={val[0]} className="flex items-center space-x-2 mb-2">
        <button onClick={e => handleSort(val[0])} className="text-black-400 hover:text-white border hover:bg-yellow-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center dark:border-yellow-300 dark:text-black-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-0"
        >{val[0]} Stars</button>
        <div className="flex-1 flex items-center space-x-2">
          <div className="bg-slate-200 rounded-sm h-3" style={{ width: '100%' }}>
            <div
              className="bg-green-600 h-3 rounded-sm dark:bg-green-500"
              style={{ width: `${(val[1] / total) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs">{val[1]}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div role='stars'>
        {ratings && Object.entries(ratings).reverse().map(star => bar(star))}
      </div>
      {filters.length > 0 &&
      <div className='flex justify-center'>
        <button onClick={(e) => handleRemove()} className="text-black-400 hover:text-white border hover:bg-yellow-500 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-1 py-1 text-center dark:border-yellow-300 dark:text-black-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-0">Remove Filters</button>
      </div>}
    </div>
  );
};

export default StarBreakdown;