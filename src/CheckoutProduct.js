import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id,title,price,image}) => { 
    const [{cart, user}, dispatch] = useStateValue(); 
        const removeFromCart = () => {
            dispatch({
                type: 'REMOVE_FROM_CART',
                id: id,
            })
        }

    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct__Image" src={image}/>

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <bold>₹</bold>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromCart} className='checkoutProduct__button'>Remove From Cart</button>
        </div>
        
            
        </div>
    )
}

export default CheckoutProduct