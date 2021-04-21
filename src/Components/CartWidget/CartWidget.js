import './CartWidget.css';



function CartWidget({ add }) {
  
  return (
 
    <div className="center">
      <h2>carrito</h2>
      <h2>total {add}</h2>
    </div>
    
  );
};


export default CartWidget;
