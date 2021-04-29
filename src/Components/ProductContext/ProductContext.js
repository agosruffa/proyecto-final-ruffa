import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
    `https://e-show-server.herokuapp.com/api/v1/products`]);

  return (
    <ProductContext.Provider 
      value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};