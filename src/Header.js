import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () =>{
        if (user) {
            auth.signOut();
        }
    }

  return (
    
    <div className='header'>
        <Link to="/" >
        <div className='header_logo'>
            <img className='amazon_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </div>
        </Link>
        

        <div className='header_search'>
            <input type='text' className='search_input' />
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>

            <Link to = {!user && '/login'}>
            <div className='header_option' onClick={handleAuthentication}>
                <span className='option_lineOne'>Hello {!user? 'Guest' :user.email}</span>
                <span className='option_lineTwo'>{user ? 'Sign Out':'Sign In'}</span>
            </div>
            </Link>

            <div className='header_option'>
                <span className='option_lineOne'>Returns</span>
                <span className='option_lineTwo'>& Orders</span>
            </div>

            <div className='header_option'>
                <span className='option_lineOne'>Your</span>
                <span className='option_lineTwo'>Prime</span>
            </div>
            
            
            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon className='header_basketIcon' />
                <span className="option_lineTwo header_basketCount">
                 {basket?.length}
                </span>
            </div>  
            </Link>

        </div>
    </div>
  )
}

export default Header;