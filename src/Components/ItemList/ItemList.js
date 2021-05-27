import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ items }) => {

    return (
        
        <div className="ItemList">
            { items.map( p =>
                <Item
                    key={p.id}
                    id={p.id} 
                    title={p.title} 
                    price={p.price} 
                    image={p.image}  
                />)
            }
        </div>
        
    )
}

export default ItemList
