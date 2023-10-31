import React from 'react'
import './Asaid.css'
import BrandOne from '../../assets/img/brand-1.png'
import BrandTwo from '../../assets/img/brand-2.png'
import BrandThree from '../../assets/img/brand-3.png'
import BrandFour from '../../assets/img/brand-4.png'
import BrandFive from '../../assets/img/brand-5.png'
import BrandSix from '../../assets/img/brand-6.png'

function Asaid() {
  return (
    <div className="asaid">
        <div className="container">
            <div className="asaid-inner">
                <img src={BrandOne} alt="" />
                <img src={BrandTwo} alt="" />
                <img src={BrandThree} alt="" />
                <img src={BrandFour} alt="" />
                <img src={BrandFive} alt="" />
                <img src={BrandSix} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Asaid