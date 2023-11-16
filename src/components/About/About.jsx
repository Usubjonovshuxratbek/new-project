import React from 'react'
import './About.css'
import Cooperation from '../../assets/img/cooperation.png'
import Payment from '../../assets/img/payment.png'
import Price from '../../assets/img/price.png'
import Icon from '../../assets/img/icon-4.png'
import Center from '../../assets/img/center.png'

function About() {
  return (
    <div className="container">
      <div className="asaid">
        <span>Bizning afzalliklarimiz</span>
        <div className="asaid-inner">
        <div className="box">
            <div className="box-inner">
              <div className="img">
                <img src={Cooperation} alt="" />
              </div>
              <div className="info">
                <h3>Oldindan to‘lovsiz</h3>
                <span>To‘lovni qo‘lga olganda to‘lash</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="img">
                <img src={Payment} alt="" />
              </div>
              <div className="info">
                <h3>To‘lov usullari</h3>
                <span>To‘lovni Naqt pul yoki bank karta orqali to‘lash</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="img">
                <img src={Price} alt="" />
              </div>
              <div className="info">
                <h3>Hamyonbop narx</h3>
                <span>Doimiy chegirmalar</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="img">
                <img src={Icon} alt="" />
              </div>
              <div className="info">
                <h3>Keng assortiment</h3>
                <span>Ehtiyojingiz uchun kerakli mahsulotlar </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-inner">
              <div className="img">
                <img src={Center} alt="" />
              </div>
              <div className="info">
                <h3>Qo‘llab-quvvatlash</h3>
                <span>Dam olish kunlarisiz qo‘llab-quvvatlash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About