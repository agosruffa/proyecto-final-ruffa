/*
import './App.css'
import { db } from "./firebase";

const orders = db.collection("orders");
const newOrder = {
    comprador: '',
    items: products(), 
    total: price(),
};

orders.add(newOrder).then(({ id }) => {
    setOrderId (id); //success

}).catch(err => {
    setError(err); //error
}).finally (() => {
    setLoading(false);
});
*/




/*
import React, { useState } from "react";
import { db } from "../Firebase/Firebase";


const Orders = () => {
    const [order, setOrder] = useState({
        "buyer": {
            "name": '',
            "phone": '',
            "email": '', 
        },
        "items": {
          "id": '',
          "title": '',
          "price": '', 
        } 

    })

    const handleChange = (e) => {

        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("order").add(order)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }
        
        e.target.reset()
    }

  return (
    <form className="formulario-container" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
         Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="nonbre"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Telefono
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="telefono"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          E-mail
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">cargar</button>
    </form>
  );
};

export default Orders;

*/


import React, { useState } from "react";
import { db } from "../Firebase/Firebase";
import { Input, Button } from 'semantic-ui-react';



const Orders = () => {
    const [order, setOrder] = useState({
       "order": {
          "buyer": {
            "name": '',
            "phone": '',
            "email": '', 
        },
          "items": {
            "id": '',
            "title": '',
            "price": '', 
        } 
      }
    })

    const handleChange = (e) => {

        setOrder({
            ...order,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("orders").add(order)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }
        
        e.target.reset()
    }

  return (
    <div>
      <h3>Completa tus datos para continuar con la compra</h3>

    <form className="formulario-container" onSubmit={handleSubmit}>
      <div>

        <Input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          style={{ fontSize: 25, width: 500 }}
          placeholder="nombre"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>

        <Input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          style={{ fontSize: 25, width: 500 }}
          placeholder="telefono"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          style={{ fontSize: 25, width: 500 }}
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
        />
      </div>
      <Button primary style={{ height: 50, fontSize: 15 }}>Enviar</Button>
    </form>
    </div>
  );
};

export default Orders

