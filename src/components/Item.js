import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const itemInCart = isInCart ? 'in-cart' : '';
  
  const switchCart = () => setIsInCart(prev => !prev);

  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={switchCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
