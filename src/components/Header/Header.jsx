import React from 'react'
import './Header.css'
import Logo from '../../assets/img/logo.png'
import Man from '../../assets/img/man.png'
import Img from '../../assets/img/img.png'
import Menu from '../../assets/img/menu.png'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <nav className='nav'>
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul className='nav-list'>
            <li className='nav-item'><a href="#" className='nav-link'>CATALOGUE</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>FASHION</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>FAVOURITE</a></li>
            <li className='nav-item'><a href="#" className='nav-link'>LIFESTYLE</a></li>
            <li className='nav-item'><a href="#" className='nav-btn'>SIGN UP</a></li>
            <button className='menu-btn'>
              <img src={Menu} alt="" />
            </button>
          </ul>
        </nav>
        <div className="hero">
          <div className="hero-inner">
            <div className="right">
              <span>LET’S</span>
              <span>EXPLORE</span>
              <span>UNIQUE</span>
              <span>CLOTHES.</span>
              <p>Live for Influential and Innovative fashion!</p>
              <div className="right-inner">
                <img src={Img} alt="" />
                <button>Shop Now</button>
              </div>
            </div>
            <div className="left">
              <img src={Man} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header