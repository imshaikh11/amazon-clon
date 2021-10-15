import React from 'react';
import "./Subtotal.css";

function Subtotal() {
    return (
        <div className="subtotal">
            <p> SubTotal(0 items): <strong>0</strong> </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button> Proceed To Buy </button>
        </div>
    )
}

export default Subtotal
