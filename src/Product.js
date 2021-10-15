import React from 'react';
import './Product.css'

function Product({id, title, price, image}) {
    return (
        <div className="product">
            <div className="'product__Info">
                <p>{title}</p>

                <p className="product__price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>

                <img className="product__img" src={image} alt="" />

            </div>
            <button className="product__button">Add to Cart</button>


        </div>
    )
}

export default Product

