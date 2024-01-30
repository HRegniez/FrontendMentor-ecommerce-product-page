import React from 'react'
import '../styles/Header.sass'


const Header = () => {
  return (
    <header className='flex'>
        <nav className='flex'>
            <img src="src/assets/logo.svg" alt="Sneakers logo" />
            <ul className='flex'>
                <li><a src="#">Collections</a></li>
                <li><a src="#">Men</a></li>
                <li><a src="#">Women</a></li>
                <li><a src="#">About</a></li>
                <li><a src="#">Contact</a></li>
            </ul>
        </nav>
        <div className='flex'>
            <img src="src/assets/icon-cart.svg" alt="Cart icon" />
            <img src="src/assets/image-avatar.png" alt="Avatar picture" />
        </div>
    </header>
  )
}

export default Header
