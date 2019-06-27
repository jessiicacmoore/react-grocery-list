import React, { useState } from 'react';
import './reset.css'
import './App.css';
import './ShoppingList'
import Filters from './Filters'
import ShoppingList from './ShoppingList';

const App = () => {

  const [categories, addCategory] = useState(['all', 'meat', 'prod', 'dairy', 'bakery']);
  const handleNewCategory = e => {
    e.preventDefault();
    const newCategory = categories.concat([e.target[0].value]);
    addCategory(newCategory)
    console.log(categories);
  }


  return (
    <main className="layout" id="App">
      
        <header className="header">
          <h1>Grocery List</h1>
        </header>
    
        <form id="newItem" className="newitem" autocomplete="off">
          <label for="itemName" className="line-label">New Item</label>
          <div className="addnew">
            <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?"/>
            <input type="submit" value="Add" className="form-component btn"/>
          </div>
        </form>
    
        <section id="filterCategories">
          <Filters categories={ categories }/>
          <form id="newCat" className="cat-new" onSubmit={ handleNewCategory }>
            <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
          </form>
        </section>
    
        <ShoppingList />
    </main>
  );
}

export default App;
