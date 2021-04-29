import './Cart.css';
import { Icon } from 'semantic-ui-react';
import React, { useContext } from 'react';
import {ProductContext} from '../../Components/ProductContext/ProductContext';


function Cart() {
  const [products, setProducts] = useContext(ProductContext);

  return (
 
    <div className="carrito">
      <Icon link name='cart'> <h3>{products.length}</h3> </Icon>
     
    </div>
    
  );
};


export default Cart;