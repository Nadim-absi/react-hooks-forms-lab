import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch] = useState("")
  const [allItems,setAllItems] = useState([])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(e){
    e.preventDefault()
    setSearch(e.target.value)
  }


  const searchedItems = search.length > 0 ? itemsToDisplay.filter((item)=>{
    const itemName =item.name
    if(itemName.toLowerCase().match(search.toLowerCase())) {
      return item
    }
   }): itemsToDisplay


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
