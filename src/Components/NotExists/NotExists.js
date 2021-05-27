import React from 'react';
import { Link } from 'react-router-dom';
import './NotExists.css';
import { Icon } from 'semantic-ui-react'

const NotExists = ({title}) => {
    return (
        <>
            <div className="not-exist-item">
                <Icon name='shopping cart' size='massive' />
                <h4>{title}</h4>
                <Link to="/Products"><button className="btn backToLanding-btn">IR A LA TIENDA</button></Link> 
            </div>
        </>
    )
}

export default NotExists
