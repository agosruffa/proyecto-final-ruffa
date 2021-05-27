import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import FinishBuying from '../FinishBuying/FinishBuying';


const ItemDetail = ({item}) => {

    const [ isAdded, setIsAdded ] = useState(false);


    return (
        
        <div className="item-detail">
            <div className="container-one">
                <div className="img-counter-container">
                    <div className="big-image-container">   
                        <div className="big-image" 
                            style={{ backgroundImage: `url(${item.image })`} }
                            >      
                        </div>
                    </div>
                    <ItemCount isAdded={isAdded} setIsAdded={setIsAdded} initial={item.initial} stock={item.stock} item={item} /> 
                    {
                        isAdded 
                            && 
                        <FinishBuying/>
                    } 
                </div>
            </div>
            <div className="container-two">
                <div className="title-price">
                    <h1 className="item-name">{item.title}</h1>
                    <h2>{item.description}</h2>
                    <h3>${item.price}</h3>
                    <p>STOCK: {item.stock}</p>
                    <small>CÓDIGO: { item.id.slice(0,6)}</small> 
                </div>
            </div>
        </div>
    ) 
        }
        
export default ItemDetail


