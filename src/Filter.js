import React from 'react';

const Filter = ({category, id}) => {
  return(
    <li><input type="radio" name="category" value={ category } id={ id } checked/><label for={ id }>{ category }</label></li>
  );
};

export default Filter;