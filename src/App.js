//React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import React  from 'react';


//Librerias
import 'react-toastify/dist/ReactToastify.min.css';




// Components
import { Header } from './Components/Header/Header';
import {Navegation }  from './Components/Navegation/Navegation';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import BuyingForm from './Components/BuyingForm/BuyingForm';
import MyOrders from './Components/MyOrders/MyOrders';
//Views
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import Products from './Views/Products/Products';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

//Context 
import { CartProvider } from './Components/CartContext/CartContext';

function App() {


  return (
    <Router>
      <CartProvider>
      
      <div className="App">
        <Header />
        <Navegation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/order" component={BuyingForm}/>
          <Route path="/my-orders" component={MyOrders}/>
        </Switch>
        <Footer />
      </div>
    
      </CartProvider>
    </Router>
  );
}

export default App;
