import './CartWidget.css';
import React, { useContext } from 'react';
import {ProductContext} from '../ProductContext/ProductContext';
import {CartContext} from '../CartContext/CartContext';
import { Item } from '../Item/Item';
import Cart from '../CartWidget/Cart';
import Orders from '../Orders/Orders'


export const CartWidget = () => {
  const [cartItems, setCartItems]= useContext(CartContext);
  const [products, setProducts] = useContext(ProductContext);

  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };
  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      <div countCartItems={cartItems.length}></div>
      <div className="row">
      <h2>Cart Items</h2>
 
        <Cart 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}>
        </Cart>
        <Orders />

      </div>
    </div>
  );
}


export default CartWidget;
