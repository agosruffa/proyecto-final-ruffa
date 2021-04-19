import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Segment, Image, Button, Container } from 'semantic-ui-react'
import './ItemDetailContainer.css'


export const ItemDetailContainer = ({ match }) => {
  const [products, setProducts] = useState({});
  
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`).then((res) =>
      setProducts(res.data)
    );
  }, [match.params.id]);

  return (
    <div>
      <Container className="letras">
      <h1>Detalle del producto</h1>
      <Segment>
        <Image src={products.thumbnailUrl} alt={products.title} size='medium' centered />
        <h2>{products.title}</h2>
        <h2>Precio $XX</h2>
      <Button.Group>
        <Button>Cancelar</Button>
        <Button positive>Agregar al carrito</Button>
      </Button.Group>
      </Segment>
      </Container>
      
    </div>
  );
};

