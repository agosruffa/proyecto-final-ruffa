import React,{useContext} from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import {CartContext} from '../CartContext/CartContext';


const Cart = () => {

    const { cart, total, deleteItem}= useContext(CartContext);

    if (cart.length !== 0) {

        return (
            <div className="cart-container">
                <div className="cart">
                    <div className="cart-columns">
                        <p></p>
                        <p>IMAGEN</p>
                        <p>NOMBRE</p>
                        <p>CANTIDAD</p>
                        <p>VALOR UNITARIO</p>
                        <p>TOTAL</p>
                    </div>
                    <div className="cart-items">
                        {
                            cart.map( ({ item, quantity, price, img }) =>(
                                <CartItem key={item} item={item} quantity={quantity} price={price} img={img} deleteItem={deleteItem}  />
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <p className="total-amount">
                        SUBTOTAL ${ total }
                        </p>
                        <Link to="/order" className="waves-effect btn">FINALIZAR COMPRA</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <div className="cart-container-empty">
                 <Icon name='shopping cart' size='massive' />
                <h4 className="empty-cart-title">NO HAY PRODUCTOS EN TU CARRITO <br/> </h4>
                <Link to="/Products"><button className="btn backToLanding-btn">VOLVER A LA TIENDA</button></Link> 
            </div>
        )
    }


}

export default Cart;
