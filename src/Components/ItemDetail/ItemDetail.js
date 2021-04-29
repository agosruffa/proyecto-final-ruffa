import { Button, Icon } from 'semantic-ui-react'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ProductContext} from '../ProductContext/ProductContext';


export default function ItemDetail(props) {
    const { onAdd } = props;
    const [products, setProducts] = useContext(ProductContext);

    return (
        <div>
          
            <Link to="/Cart">
                <Button animated='fade' onClick={() => setProducts(products) }>
                    <Button.Content visible>Finalizar su compra</Button.Content>
                    <Button.Content hidden>
                    <Icon name='shop' />
                    </Button.Content>
                    </Button>
            </Link>
        
        </div>
    )
}




