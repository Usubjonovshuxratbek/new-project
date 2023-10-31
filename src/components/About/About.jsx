import React from 'react'
import App from '../../assets/img/app.png'
import Play from '../../assets/img/play.png'
import Mobile from '../../assets/img/mobile.png'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-inner">
          <div className="info">
            <span>DOWNLOAD APP & GET THE VOUCHER!</span>
            <p>Get 30% off for first transaction using Rondovision mobile app for now.</p>
            <div className="download-btns">
              <a href="#"><img src={App} alt="" /></a>
              <a href="#"><img src={Play} alt="" /></a>
            </div>
          </div>
          <div className="app">
            <img src={Mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About