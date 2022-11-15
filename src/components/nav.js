import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {


  const items = useSelector((state) => state.cart)

  return (
    <header>
      <nav className='container'>
        <a href="/" className='logo'><span>Web</span>Store</a>

        <div className='navlinks'>
          <Link className='navLink' to="/">Home</Link>
          <Link className='navLink' to="/cart">Cart</Link>
          <span className='cartCount'>Cart items : <span className='itemsCounter'> {items.length}</span></span>
        </div>
        {/* <ul>
          <li>
            <a href="/"><FiShoppingBag /></a>
          </li>
          <li>
            <a href="/"><BsBookmarkHeartFill /></a>
          </li>
        </ul> */}
      </nav>
    </header>
  )
}

export default Nav;
