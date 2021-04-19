import React from 'react'
import './Navegation.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

export const Navegation = () => {
  return (
    <nav className="Navegation">
      <ul className="Navegation-ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Products">
          <li>Products</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
        <CartWidget />
      </ul>
    </nav>
  );
};



/* 


import { Dropdown, Menu } from 'semantic-ui-react'

export default class Navegation extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <nav className="Navegation">
      <Menu secondary >
        <div className="Navegation-ul">
        <Link to="/">
        <Menu.Item 
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Menu.Item
          name='Contact'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
        
        <Dropdown item text='Products'>
          <Dropdown.Menu>
            <Link to="/Products">
            <Dropdown.Item>Todos</Dropdown.Item>
            </Link>
            <Dropdown.Item>Planes Alimenticios</Dropdown.Item>
            <Dropdown.Item>Rutinas</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        </div>
      </Menu>
      </nav>
    )
  }
}

*/ 






