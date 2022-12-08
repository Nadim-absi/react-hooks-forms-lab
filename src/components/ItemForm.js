import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newGrocery,setNewGrocery]=useState({name:"",category:"Produce"})

  function handleChange(e){
    const {name,value} = e.target
    setNewGrocery((prev)=>({
      ...prev, [name]:value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: newGrocery.name,
      category: newGrocery.category

    })
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newGrocery.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newGrocery.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
