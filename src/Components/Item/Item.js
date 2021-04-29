import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';
import './Item.css';
import {ProductContext} from '../ProductContext/ProductContext';

//firebase 
import {db} from '../Firebase/Firebase';

  
//sin useContext
//const [products, setProducts] = useState([]);



//con FIREBASE 
export const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { docs } = await db.collection("Productos").get();
      const data = docs.map((products) => ({ id: products.id, ...products.data() }));
      setProducts(data);
    };

    getData();
  }, []);

  return (
<div className="items-2"> 
      {products.map((products) => (
      <Card >
        <Image src={products.image} alt={products.name} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    <h2> {products.title}</h2>
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='grey' key={products.id} >
                <Link to={`Products/${products.id} ` }>Ver Detalle</Link></Button>
            </Card.Content>
      </Card>

      
      ))}
    </div>
  );
};









/*
//con useContext
export const Item = (props) => {
  const [products, setProducts] = useContext(ProductContext);
  const { onAdd } = props;

  useEffect(() => {
    axios(`https://e-show-server.herokuapp.com/api/v1/products`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="items-2"> 
      {products.map((products) => (
      <Card >
        <Image src={products.image} alt={products.name} wrapped ui={false} />
            <Card.Content>
                <Card.Header>
                    <h2 key={products.id}>{products.name} </h2>
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button basic color='grey' key={products.id} >
                <Link to={`Products/${products.id} ` }>Ver Detalle</Link></Button>
            </Card.Content>
      </Card>

      
      ))}
    </div>
  );
};

*/
















/* jsonplaceholder 

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
*/
