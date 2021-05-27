import React,{useContext,useState ,useEffect, useCallback}from 'react'
import { CartContext } from '../CartContext/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './ItemCount.css'

const ItemCount = ({ setIsAdded, initial, stock, item }) => {

    const { addToCart,isInCart,updateItems } = useContext(CartContext);

    if(stock === 0) { 
        initial = "Sin stock"
    }
    else {
        initial = 1
    }
    const [ counter, setCounter ] = useState(initial);
    const [ isIn, setIsIn ] = useState();
    const [ limitToBuy, setLimitToBuy ] = useState();
    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);

    const toasti = () => {toast(`${counter} ${counter>1 ? 'items agregados': 'item agregado'} al carrito `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    })};

    const isItemAlreadyInCart = useCallback(() => isInCart(item.title),[isInCart, item.title]);
    

    const limitQtyToBuy = useCallback(() => {
        
        const qty = isItemAlreadyInCart();

        if( (qty?.quantity + counter) === item.stock ) {
            setLimitToBuy(true)
        } else {
            setLimitToBuy(false)
        }
        
    },[counter, isItemAlreadyInCart,item.stock]) 
    

    useEffect(() => {

        setIsIn(isItemAlreadyInCart);
        limitQtyToBuy();

    }, [isItemAlreadyInCart, limitQtyToBuy])

        
    return (
        
            <div className="item-counter">
                <div className="counter-container">
                    <button onClick = { removeItem } className="btn counter-btn" disabled={ counter <= initial }><p>-</p></button>
                    <p className="counter-value" onChange = { isItemAlreadyInCart } >
                        {
                            (isIn !== undefined && isIn?.quantity === isIn?.stock ) ?
                            "NO HAY MÁS STOCK"
                            :
                            counter 
                        }
                    </p>
                    <button onClick = { addItem } className="btn counter-btn"
                     disabled={ counter >= stock || stock === 0 || (isIn !== undefined && isIn?.quantity === isIn?.stock ) || limitToBuy }>
                         <p>+</p>
                    </button>
                </div>

                <button 
                    onClick={ ()=>{
                        addToCart({item:item.title, quantity: counter, price: item.price, img: item.image, id: item.id, stock: item.stock});
                        setCounter(initial);
                        setIsAdded(true);
                        updateItems();
                        toasti();
                    }}
                    className="btn"
                    disabled={stock === 0 || (isIn !== undefined && isIn?.quantity === isIn?.stock )} 
                >
                    {
                        isIn !== undefined  ? 
                        `AGREGAR ${counter} MÁS` 
                        : 
                        'AGREGAR AL CARRITO'
                    }
                </button>
            </div>
    )
}

export default ItemCount




