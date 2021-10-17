import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__img" src="https://images-ext-1.discordapp.net/external/I9ewjO4ecNRdyWeD_NNixr_UMI1n6xyuqsZyCuFfuwI/https/m.media-amazon.com/images/I/71UhgZQzskL.SX3000.jpg?width=1440&height=576" alt="" />


                <div className="home__row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed"
                        price={4424.56}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SY344_BO1,204,203,200_.jpg"
                    />

                    <Product
                        id="02"
                        title="Apple iPhone 11 (64GB) - Black"
                        price={50999.00}
                        image="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SY344_BO1,204,203,200_.jpg"
                    />

                    <Product
                        id="03"
                        title="Noise Air Buds Truly Wireless Earbuds"
                        price={1599.00}
                        image="https://m.media-amazon.com/images/I/51juWgr4R3L._SL1500_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="04"
                        title="2019 Apple MacBook Pro - Space Grey"
                        price={215900.00}
                        image="https://m.media-amazon.com/images/I/71p1D89L7RL._SL1500_.jpg"
                    />
                    <Product
                        id="05"
                        title="Nitho Drive Pro V16 Racing Wheel & Pedal Set"
                        price={7099.00}
                        image="https://m.media-amazon.com/images/I/71S-XvtqZsL._SL1500_.jpg"
                    />

                    <Product
                        id="06"
                        title="Pintola Choco Spread Peanut Butter (Creamy) (1kg)"
                        price={399.00}
                        image="https://m.media-amazon.com/images/I/81DhS6U91VL._SL1500_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="07"
                        title="Spotzero by Milton Prime Spin Mop with Big Wheels and Stainless Steel Wringer,Aqua Green"
                        price={1199.00}
                        image="https://m.media-amazon.com/images/I/81vwNP4jEcL._SL1500_.jpg"
                    />

                    <Product
                        id="08"
                        title="Jhula || Hanging Swing Chair || Indoor Furniture Swing (Standard) (White&Blue)"
                        price={12800.00}
                        image="https://m.media-amazon.com/images/I/81X78tJXnKL._SL1500_.jpg"
                    />

                    <Product
                        id="09"
                        title="Hovom Cotton Shorts for Boys and Girls - Regular Fit Color Block Shorts for Unisex, Multicolor - Pack of 3"
                        price={499.00}
                        image="https://m.media-amazon.com/images/I/61ePsWsiacL._UL1400_.jpg"
                    />
                </div>

            </div>

        </div>
    )
}

export default Home
