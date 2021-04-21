import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import  ItemDetail  from '../ItemDetail/ItemDetail';
import './ItemCount.css'

function ItemCount() {
    const [count, setCount] = useState(0)

  return (

    <div >     
        <h4>Cantidad</h4>
        <p>{count}</p>
        <div>
            <Button basic color='red' onClick={() => setCount(count > 0 && count - 1) }>
            Borrar
            </Button>
            
            <Button 
             basic color='green' 
             onClick={() => setCount(count + 1)}>
            Agregar al carrito
            </Button>
        
        <div className="itemscount"> 
            {
            count > 0 &&
            <ItemDetail />
            }
        </div>
        </div>
   
        
    </div>

  )
}

export default ItemCount











/*
import React, { Component } from 'react'
import './ItemCount.css'
import { Button } from 'semantic-ui-react';


export default class ItemCount extends Component {
    constructor() {
        super(); 

        this.state = {
            count: 0,
        };

    }
    
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
      };

  
render() {


return (

<div className="itemscount">     
    <h4>Item Count</h4>
    <p>{this.state.count}</p>
    <div>
        <Button basic color='red' onClick={this.handleDecrement}>
        Borrar
        </Button>
        <Button 
        basic color='green' 
        onClick={this.handleIncrement}
        >
        Agregar al carrito
        </Button>
    </div>
</div>
        )
    }
}

*/


