import React from 'react';
import Filter from './Filter'

const Filters = ({categories}) => {

  const filterList = []
  categories.forEach(function(cat, index) {
    filterList.push(<Filter category={cat} id={"filter" + index} />)
  });

  return(
    <ul className="filters">
      {filterList}
    </ul>
  );
};

export default Filters;

