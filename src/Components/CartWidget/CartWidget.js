import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';
import { Icon } from 'semantic-ui-react'
import './CartWidget.css';


const CartWidget = () => {

    const { items }= useContext(CartContext);

    return (
        
            <div className = "cartwidget-container" >
                {
                    items > 0 
                    && 
                    <div className="total-items">
                        <p>{items}</p>
                    </div>
                }
                <Link to="/cart" > <Icon name='shopping cart' inverted color='grey' size='large' /></Link>
            </div>
        
    )

}

export default CartWidget
