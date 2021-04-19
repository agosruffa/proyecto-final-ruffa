import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';
import './Item.css';



export const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/albums/1/photos`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="items-2"> 
      {products.map((products) => (
      <Card >
        <Image src={products.url} alt={products.title} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    <h2 key={products.id}>{products.title}</h2>
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='grey' key={products.id}>
                <Link to={`Products/${products.id}`}>Ver Detalle</Link></Button>
            </Card.Content>
      </Card>

      
      ))}
    </div>
  );
};
