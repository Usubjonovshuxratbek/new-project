import React from 'react'
import './Favourite.css'
import FavouriteOne from '../../assets/img/favourite-1.png'
import FavouriteTwo from '../../assets/img/favourite-2.png'
import Icon from '../../assets/img/icon.png'

function Favourite() {
    return (
        <section className='favourite'>
            <div className="container">
                <div className="section-title">
                    <h2>Young’s Favourite</h2>
                </div>
                <div className="boxs">
                    <div className="box">
                        <div className="box-img">
                            <img src={FavouriteOne} alt="" />
                        </div>
                        <div className="box-info">
                            <div>
                                <span>Trending on instagram</span>
                                <p>Explore Now!</p>
                            </div>
                            <div>
                                <a href="#"><img src={Icon} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src={FavouriteTwo} alt="" />
                        </div>
                        <div className="box-info">
                            <div>
                                <span>All Under $40</span>
                                <p>Explore Now!</p>
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

export default Favourite