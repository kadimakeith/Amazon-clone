import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt =''/>
            </Link>
            
            <div className="header_search">
                <input className='header_searchInput' type='text'/> 
                <SearchIcon className='header_searchIcon' />
            <div className='header_nav'>
                <div className='header_option'>
                    <span className ='header_optionLineOne'>Hello Guest,</span>
                    <span className ='header_optionLineTwo'>Sign in</span>

                </div>
                <div className='header_option'>
                    <span className ='header_optionLineThree'>Returns</span>
                    <span className ='header_optionLineFour'>& Orders</span>
                    
                </div>
                <div className='header_option'>
                    <span className ='header_optionLineFive'>Your</span>
                    <span className ='header_optionLineSix'>Prime</span>

                  
                </div>
                <Link to="/checkout">
                <div className ="header_OptionBasket">
                    <ShoppingBasketIcon />
                    <span className ="header_optionLineTwo header_BasketCount ">{basket?.length}</span>
                </div>
                </Link>
                
                
            </div>
            </div>
        </div>
    )
}

export default Header
