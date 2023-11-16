import React from 'react'
import './Footer.css'
import Facebook from '../../assets/img/facebook.png'
import Youtube from '../../assets/img/youtube.png'
import Instagram from '../../assets/img/instagram.png'
import Telegram from '../../assets/img/telegram.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-inner">
          <div className="info">
            <a href="/">2023 oddiy.uz</a>
            <span>Barcha huquqlar himoyalangan</span>
          </div>
          <div className="social-media">
            <span>Ijtimoiy tarmoqlarimiz</span>
            <div className="social-icon">
              <a href="#"><img src={Facebook} alt="" /></a>
              <a href="#"><img src={Youtube} alt="" /></a>
              <a href="#"><img src={Telegram} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer