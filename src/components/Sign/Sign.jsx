import React from 'react'
import './Sign.css'

function Sign() {
  return (
    <section className='sign'>
        <div className="container">
            <div className="sign-inner">
                <h2>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                <p>Type your email down below and be young wild generation</p>
                <form action="#" className='form-group'>
                    <input type="email" placeholder='Add your email here' />
                    <button>SEND</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Sign