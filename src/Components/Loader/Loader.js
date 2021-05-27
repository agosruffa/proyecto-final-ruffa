import React from 'react';
import { Icon } from 'semantic-ui-react'
import './Loader.css';

const Loader = () => {
    return (
        
            <div className="loader-screen">
                <div>
                    <Icon loading name='spinner' size='huge' />
                </div>
            </div>
       
        
    )
}

export default Loader
