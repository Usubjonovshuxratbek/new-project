import React from 'react'
import './Main.css'
import SaveIcon from '../../assets/img/save-icon.png'

function Main() {
  return (
    <section className='main'>
        <div className="container">
            <span className='title'>Mashhur maxsulotlar</span>
            <div className="products">
            <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 1</div>
                    <div className="product-block">
                        <div className="price">14 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 2</div>
                    <div className="product-block">
                        <div className="price">16 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 3</div>
                    <div className="product-block">
                        <div className="price">22 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 4</div>
                    <div className="product-block">
                        <div className="price">30 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className='titlee'>Yangi maxsulotlar</span>
            <div className="products">
            <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 1</div>
                    <div className="product-block">
                        <div className="price">14 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 2</div>
                    <div className="product-block">
                        <div className="price">16 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 3</div>
                    <div className="product-block">
                        <div className="price">22 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-img"></div>
                    <div className="product-name">Maxsulot 4</div>
                    <div className="product-block">
                        <div className="price">30 000 so'm</div>
                        <div className="buy">
                            <button><img src={SaveIcon} alt="" /></button>
                            <span>Xarid</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main