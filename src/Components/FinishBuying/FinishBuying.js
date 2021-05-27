import React from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './FinishBuying.css'

const FinishBuying = () => {
    return (

        <div className="finish-buying">
            <Link to="/cart" 
                className="btn">
                IR AL CARRITO
                <Icon name='shopping cart' size='large'/> 
            </Link>
         </div>

    )
}

export default FinishBuying
