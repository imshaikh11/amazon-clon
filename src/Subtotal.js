import React, { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const history = useHistory();
    const [{cart},dispatch] = useStateValue();   
    console.log(cart[0])
    return (
        <div className="subtotal">
       <CurrencyFormat 
         renderText = { (value) => (
          <>
                <p>Subtotal ({cart?.lenght} items):<strong>{value}</strong> </p>
                <small className="subtotal--gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
          </>
         )}
         decimalScale = {2}
         value = {getCartTotal(cart)}
         displayType = {"text"}
         thousandSeparator = {true}
         prefix = {"₹"}
      />      
        <button onClick={e => history.push('/payment')} className="subtotal__button">Procedd to buy</button>
            
        </div>
    )
}

export default Subtotal