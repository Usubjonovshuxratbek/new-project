import React from 'react'
import './Hero.css'
import PhoneIcon from '../../assets/img/phone.png'
import IconOne from '../../assets/img/icon-1.png'
import IconTwo from '../../assets/img/icon-2.png'
import Women from '../../assets/img/women.png'
import Man from '../../assets/img/man.png'
import IconThree from '../../assets/img/icon-3.png'

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-title">
                    <span>Turkumlar</span>
                    <p>Turkumlardan birini tanlang!</p>
                </div>
                <div className="colections">
                    <a href="#" className='colection'>
                        <img src={PhoneIcon} alt="" />
                        <span>Elektronika</span>
                    </a>
                    <a href="#" className='colection'>
                        <img src={IconOne} alt="" />
                        <span>Go‘zallik</span>
                    </a>
                    <a href="#" className='colection'>
                        <img src={IconTwo} alt="" />
                        <span>Sovg‘alar</span>
                    </a>
                    <a href="#" className='colection'>
                        <img src={Women} alt="" />
                        <span>Ayollar uchun</span>
                    </a>
                    <a href="#" className='colection'>
                        <img src={Man} alt="" />
                        <span>Erkaklar uchun</span>
                    </a>
                    <a href="#" className='colection'>
                        <img src={IconThree} alt="" />
                        <span>Bolalar uchun</span>
                    </a>
                    <a href="#" className='colection'>
                        <span>Avtomobil uchun</span>
                    </a>
                    <a href="#" className='colection'>
                        <span>Salomatlik uchun</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero