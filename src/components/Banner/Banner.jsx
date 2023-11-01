import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/img/banner-img.png'
import StarFiver from '../../assets/img/star-5.png'
import StarSix from '../../assets/img/star-6.png'
import StarSeven from '../../assets/img/star-7.png'
import StarEight from '../../assets/img/star-8.png'

function Banner() {
  return (
    <section id='fashion' className='banner'>
      <div className="banner-inner">
        <div className="right">
          <img src={BannerImg} alt="" />
        </div>
        <div className="left">
          <div className="left-inner">
            <h3>PAYDAY</h3>
            <h3>SALE NOW</h3>
            <p>Spend minimal $100 get 30% off
              voucher code for your next purchase</p>
            <span>
              <b>1 June - 10 June 2021</b>
              <p>*Terms & Conditions apply</p>
            </span>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner