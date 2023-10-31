import React from 'react'
import './Footer.css'
import Facbook from '../../assets/img/facebook.png'
import Instagram from '../../assets/img/instagram.png'
import Tiwetter from '../../assets/img/tiwetter.png'
import In from '../../assets/img/in.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-inner">
                    <div className="right">
                        <h2>FASHION</h2>
                        <p>Complete your style with awesome clothes from us. in</p>
                        <div className="socal-media">
                            <a href="#">
                                <img src={Facbook} alt="" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={Tiwetter} alt="" />
                            </a>
                            <a href="#">
                                <img src={In} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="left">
                        <ul className='footer-list'>
                            <li className="footer-item">
                                <span>Company</span>
                                <a href="#">About</a>
                                <a href="#">Contact us</a>
                                <a href="#">Support</a>
                                <a href="#">Careers</a>
                            </li>
                            <li className="footer-item">
                                <span>Quick Link</span>
                                <a href="#">Share Location</a>
                                <a href="#">Orders Tracking</a>
                                <a href="#">Size Guide</a>
                                <a href="#">FAQs</a>
                            </li>
                            <li className="footer-item">
                                <span>Legal</span>
                                <a href="#">Terms & conditions</a>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer