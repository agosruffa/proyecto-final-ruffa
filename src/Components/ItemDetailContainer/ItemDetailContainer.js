import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import NotExists from '../NotExists/NotExists';
import {db} from '../Firebase/Firebase';


const ItemDetailContainer = () => {

    const [item, setItem ] = useState([]);
    const [loading, setLoading ] = useState(true);

    const {id} = useParams();


    useEffect(() => {

        const itemCollection = db.collection('Productos');
        const item = itemCollection.doc(id);
        
        item.get().then( doc => {

            if(!doc.exists){
                setItem("not exist")
                return;
            }
            
            setItem({ id: doc.id, ...doc.data() });
            
        })
        .catch(error => console.log(error))
        .finally(()=> {
            setLoading(false)
        })

    }, [id]);

    if(loading) {
        return (
            <Loader/>
        )
    } else if(item === "not exist"){
        return(
            <NotExists title={"El producto que está buscando no existe."}/>
        )
    } else {
        return(
            <ItemDetail item={item} /> 
        )
    }
}

export default ItemDetailContainer;



