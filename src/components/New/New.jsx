import React from 'react'
import './New.css'
import CardOne from '../../assets/img/card-1.png'
import CardTwo from '../../assets/img/card-2.png'
import CardThree from '../../assets/img/card-3.png'
import Icon from '../../assets/img/icon.png'

function New() {
    return (
        <section id='cataloge' className='new'>
            <div className="container">
                <div className="section-title">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-img">
                            <img src={CardOne} alt="" />
                        </div>
                        <div className="card-info">
                            <div>
                                <h3>Hoodies</h3>
                                <span>Explore Now!</span>
                            </div>
                            <div>
                                <a href="#"><img src={Icon} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={CardTwo} alt="" />
                        </div>
                        <div className="card-info">
                            <div>
                                <h3>Coats & Parkas</h3>
                                <span>Explore Now!</span>
                            </div>
                            <div>
                                <a href="#"><img src={Icon} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={CardThree} alt="" />
                        </div>
                        <div className="card-info">
                            <div>
                                <h3>Tees & T-Shirt</h3>
                                <span>Explore Now!</span>
                            </div>
                            <div>
                                <a href="#"><img src={Icon} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default New