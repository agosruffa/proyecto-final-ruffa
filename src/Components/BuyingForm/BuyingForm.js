import React, { useState, useContext } from "react";
import { db } from "../Firebase/Firebase";
import firebase from 'firebase/app';
import '@firebase/firestore';
import {CartContext} from '../CartContext/CartContext';
import { useHistory } from "react-router-dom";
import { Icon, Input } from 'semantic-ui-react'
import NotExists from '../NotExists/NotExists';
import './BuyingForm.css';



const BuyingForm = ({id}) => {
    
    const [ error, setError ] = useState(false);
    
    const [newId, setNewId] = useState();
    
    const { cart, setCart, total, orderIds, setOrderIds, itemsInLocal } = useContext(CartContext);
    
    const [loading, setLoading] = useState(false);
    
    let history = useHistory();
    
    const [order, setOrder] = useState({
            name:'',
            lastname:'',
            phone:'',
            email:'',
            items: cart.map(item => ({
                id: item.id,
                item: item.item,
                price: item.price,
                qty: item.quantity
            })),
            date: firebase.firestore.Timestamp.fromDate( new Date()) ,
            total: total
        },
        
        );
    
        const updateStocks = () => {
        const itemCollection =  db.collection('Productos')
        const bache = db.batch()
        cart.forEach( item => {
            bache.update(itemCollection.doc(item.id),{stock: item.stock - item.quantity})
        })

        bache
        .commit()
        .then(()=> {
            console.log("Bache ok")
        })
        .catch(e => console.log(e))
    }
    
        const handleChange = (e) => {

        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })   
    }

        const handleSubmit = async (e) => {
            e.preventDefault();
                setLoading(true);
                localStorage.removeItem('cart');
                setCart( itemsInLocal );
                updateStocks();
                newId !== '' && history.push("/my-orders");
            try {
                await db.collection("orders").add(order)
                .then( ({ id }) =>{
                    setOrderIds( [ ...orderIds, { id }] );
                    setNewId(id);
                })
                console.log("upload success")
        }   
            catch (error) {
            setError(error)
        }
        e.target.reset()
    }

    
  return (


    cart.length === 0  && loading === false ? (

        <NotExists title={"BUSCAR PRODUCTOS"}/>
    ): (

        <div className="buy-form-container">  

            <form className="form-container" onSubmit={handleSubmit}>
                <h3 className="total-amount">
                    COMPLETE SUS DATOS PARA FINALIZAR LA COMPRA
                </h3>
                <span></span> 
      
                <div className="input-field">
                    <Icon name='user' size='large' />
                    <Input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{ fontSize: 15, width: 400 }}
                    placeholder="Nombre"
                    name="name"
                    required
                    onChange={handleChange}
                    />
                </div>
      
                <div className="input-field">
                    <Icon name='user' size='large' />
                    <Input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{ fontSize: 15, width: 400 }}
                    placeholder="Apellido"
                    name="lastname"
                    required
                    onChange={handleChange}
                    />
                </div>
      
                <div className="input-field">
                    <Icon name='phone' size='large' />
                    <Input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{ fontSize: 15, width: 400 }}
                    placeholder="Teléfono"
                    name="phone"
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <Icon name='mail' size='large' />
                    <Input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    style={{ fontSize: 15, width: 400 }}
                    placeholder="name@example.com"
                    name="email"
                    required
                    onChange={handleChange}
                    />
                </div>


                <h4 className="total-amount">
                    EL TOTAL DE SU COMPRA ES: &nbsp; ${ total }
                </h4>
                <span></span>
                {error && <p>{error}</p> }


                    {
                        loading ? (
                            <button className="waves-effect btn btn-getOrder ">
                                <div className="loop">
                                <Icon name='sync' size='large' />
                                </div>
                            </button>
                        ) : (
                            <button  type="submit"  className= "waves-effect btn btn-buy ">
                                FINALIZAR COMPRA
                            </button>
                        )
                    }
            </form>
        </div>
  ));
};

export default BuyingForm