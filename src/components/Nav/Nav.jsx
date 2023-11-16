import React from 'react'
import './Nav.css'
import Logo from '../../assets/img/logo.png'
import SearchIcon from '../../assets/img/search-icon.png'
import Icon from '../../assets/img/icon.png'

function Nav() {
    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-inner">
                    <div className="right">
                        <a href="/">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="center">
                        <select>
                            <option value="barchasi">Barchasi</option>
                            <option value="barchasi">Barchasi</option>
                            <option value="barchasi">Barchasi</option>
                        </select>
                        <span></span>
                        <form>
                            <input type="text" placeholder='qidirish..' />
                            <button><img src={SearchIcon} alt="" /></button>
                        </form>
                    </div>
                    <a href="#" className='left'>
                        <img src={Icon} alt="" />
                        <span>Hisob</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav