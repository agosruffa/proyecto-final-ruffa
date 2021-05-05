import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Segment, Image, Container } from 'semantic-ui-react'
import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import {db} from '../Firebase/Firebase';
import {useParams} from 'react-router-dom';

/* con context 
export const ItemDetailContainer = ({ match }) => {
  const [products, setProducts] = useState({});
  
  useEffect(() => {
    axios(`https://e-show-server.herokuapp.com/api/v1/products/${match.params.id}`).then((res) =>
      setProducts(res.data)
    );
  }, [match.params.id]);

  return (
    <div>
      <Container className="letras">
      <h1>Detalle del producto</h1>
      <Segment>
        <Image src={products.image} alt={products.richDescription} size='medium' centered />
        <h2>{products.richDescription}</h2>
        <h2 >Precio ${products.price} </h2>
        <ItemCount />
      </Segment>
      </Container>
    
    </div>
  );
};
*/







export const ItemDetailContainer = () => {

    const [products, setProducts ] = useState([]);
    const {id} = useParams();

/*
    useEffect(() => {

        const itemCollection = db.collection('Productos');
        const item = itemCollection.doc(id);
        
        item.onSnapshot( doc => {
            setProducts({ id: doc.id, ...doc.data() });
        })
    }, []);
*/
  
    useEffect(() => {



      db.collection('Productos')
       .onSnapshot(querySnapshot => {
          querySnapshot.forEach(doc => {
            setProducts( { id: doc.id, ...doc.data() });
          });
        });
    }, []);
    


  
  

      return (
        <div>
          <Container className="letras">
          <h1>Detalle del producto</h1>
          <Segment>
            
            <Image src={products.image} size='medium' centered />
  
            <h2 >Precio ${products.price} </h2>
            <ItemCount />
          </Segment>
          </Container>
          
        </div>
      );
    
    };




