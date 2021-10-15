import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </Link>

            <div className="header__addressLogo">
                <LocationOnOutlinedIcon className="header__addressLogo" />

                <div className="header__addressLine">
                    <span className="header__addressLineOne">Deliver to Guest</span>
                    <span className="header__addressLineTwo">Your Location</span>
                </div>
            </div>

            <div className="header__search">
                <input className="header__searchInput" type="text" />

                {/* Material UI */}
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <img className="header__optionFlag" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" alt="flag" />
                <div className="header__option">
                    <span className="heder__optionLineOne">Hello, Guest</span>
                    <span className="heder__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="heder__optionLineOne">Return</span>
                    <span className="heder__optionLineTwo"> & Order</span>
                </div>

                <div className="header__option">
                    <span className="heder__optionLineOne">Your</span>
                    <span className="heder__optionLineTwo">Prime</span>
                </div>

            </div>

            <Link to="/checkout">
            <div className="header__cart">
                <ShoppingCartIcon />
                <span className="heder__optionLineTwo    header__cartCount">0</span>
            </div>
            </Link>
           

        </div>
    )
}


export default Header
