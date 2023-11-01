import React from 'react'
import App from '../../assets/img/app.png'
import Play from '../../assets/img/play.png'
import Mobile from '../../assets/img/mobile.png'
import './About.css'
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div id='lifestyle' className="about">
      <div className="container">
        <Fade bottom>
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
        </Fade>
      </div>
    </div>
  )
}

export default About