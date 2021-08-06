import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  
  // replace 'false' with a state variable that can be toggled between true and false
  const [toggle, setToggle] = useState(false);

  const colorModeChange = () => setToggle(prev => !prev);
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggle ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={colorModeChange}>Switch Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
