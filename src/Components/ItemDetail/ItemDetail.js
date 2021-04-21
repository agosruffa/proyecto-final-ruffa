import { Button, Icon } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function ItemDetail({ count }) {
    const [add, setAdd] = useState({count})

    return (
        <div>
          
            <Link to="/Cart">
                <Button animated='fade' onClick={() => setAdd(add)} >
                <Button.Content visible>Finalizar su compra</Button.Content>
                <Button.Content hidden>
                <Icon name='shop' />
                </Button.Content>
                </Button>
            </Link>
        
        </div>
    )
}

export default ItemDetail


