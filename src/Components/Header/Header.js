import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header-logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon logo'
        />
      </Link>

      <div className='header-search'>
        <input className='search-input' type='text' />
        <SearchIcon className='search-icon' />
      </div>

      <div className='header-nav'>
        <Link style={{ textDecoration: 'none' }} to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header-option'>
            <span className='header-optionLineOne'>
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header-optionLineTwo'>
              {user ? 'Sing Out' : 'Sing In'}
            </span>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/order'>
          <div className='header-option'>
            <span className='header-optionLineOne'>Returns</span>
            <span className='header-optionLineTwo'>& Order</span>
          </div>
        </Link>

        <div className='header-option'>
          <span className='header-optionLineOne'>Your</span>
          <span className='header-optionLineTwo'>Prime</span>
        </div>

        <Link style={{ textDecoration: 'none' }} to='/checkout'>
          <div className='header-optionBasket'>
            <ShoppingBasketIcon />
            <span className='header-optionLineTwo header-optionBasket-Count'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
