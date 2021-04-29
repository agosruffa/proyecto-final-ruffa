//React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import {useState} from 'react';
// Components
import { Header } from './Components/Header/Header';
import {Navegation }  from './Components/Navegation/Navegation';
import Footer from './Components/Footer/Footer';
import CartWidget from './Components/CartWidget/CartWidget';
//Views
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import Products from './Views/Products/Products';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

//Context 
import { ProductProvider } from './Components/ProductContext/ProductContext';
import { CartProvider } from './Components/CartContext/CartContext';

function App() {

  return (
    <Router>
      <CartProvider>
      <ProductProvider> 
      
      <div className="App">
        <Header />
        <Navegation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Products/:id" component={ItemDetailContainer} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Cart" exact component={CartWidget} />
        </Switch>
        <Footer />
      </div>
      
      </ProductProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
