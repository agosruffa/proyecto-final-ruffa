import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './Item.css';


const Item = ({ id, title, price, image }) => {

  return (
    
   <div className="">
        <div className="items-2">
            <Link to={`/item/${id}`} >
                <div class="ui link cards">
                    <Card>
                        <img src={image} alt="" wrapped ui={false}  height="180"/>
                        <Card.Content>
                            <Card.Header >{title}</Card.Header>
                            <Card.Description >${price}</Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </Link>
        </div>
    </div>
    
  )
}

export default Item