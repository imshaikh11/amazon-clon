import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/711njEvPw2L._SX3000_.jpg" alt="" />

               <div className="home__row">
               <Product 
                  id="01"
                  title="See u in C by Ali Karim Sayed"
                  price={4450}
                  image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                  />

               <Product 
                  id="02"
                  title="boAt Xtend Smartwatch with Alexa"
                  price={5000}
                  image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SL1500_.jpg"
                  />

                <Product 
                  id="03"
                  title="Apple iPhone 13 Mini (256GB) - Midnight"
                  price={70000}
                  image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
                  />

                  <Product 
                  id="04"
                  title="boAt Bassheads 242 in Ear Wired Earphones"
                  price={549}
                  image="https://m.media-amazon.com/images/I/61+tzvHZi+L._SL1500_.jpg"
                  />

                  <Product 
                  id="05"
                  title="The Body Shop Toner, Seaweed, 250ml"
                  price={1095}
                  image="https://m.media-amazon.com/images/I/61yNvLuHs8L._SL1300_.jpg"
                  />
                </div>
       
                <div className="home__row">
                <Product 
                  id="06"
                  title="HP Chromebook x360 14-inch (35.56 cms)"
                  price={50000}
                  image="https://m.media-amazon.com/images/I/81hoonPUdxL._SL1500_.jpg"
                  />
               <Product
                  id="07"
                  title="2020 Apple MacBook Pro"
                  price={120000}
                  image="https://m.media-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg"
                  />
                  <Product 
                  id="08"
                  title="Pigeon by Stovekraft 2 Burner Glass"
                  price={1987}
                  image="https://m.media-amazon.com/images/I/61wrnEQPveL._SL1390_.jpg"
                  />
                  <Product 
                  id="09"
                  title="AmazonBasics Stainless Steel Electric Kettle"
                  price={849}
                  image="https://m.media-amazon.com/images/I/71PuuFRpvNL._SL1500_.jpg"
                  />
                </div>

                <div className="home__row">
                <Product 
                  id="10"
                  title="Mi 80 cm (32 inches) HD"
                  price={160000}
                  image="https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg"
                  />
                  <Product 
                  id="11"
                  title="LEOTUDE Regular Fit Half Sleeve Men's T-Shirt"
                  price={499}
                  image="https://m.media-amazon.com/images/I/41nvyksD5lL.jpg"
                  />
                  <Product 
                  id="12"
                  title="Women's Rayon Anarkali Kurta"
                  price={699}
                  image="https://m.media-amazon.com/images/I/61BmUy2hT5S.jpg"
                  />
                </div>
            </div>
        </div>
    )
}

export default Home

