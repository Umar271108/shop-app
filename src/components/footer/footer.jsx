import React from 'react'
import logo from '../../assets/images/logo.png'
import List from '../footer-list/List'
import Img1 from '../../assets/images/1 (1).png'
import Img2 from '../../assets/images/1 (2).png'
import Img3 from '../../assets/images/1 (3).png'
import './footer.css'

const Footer = () => {

    const Footer_ul = () => {
        return(
            <>
                <div className="footer-list">
                <div className="list-title">СОЦ СЕТИ</div>
                <ul className="footer-ul">
                    <li className="footer-list-item">
                        <img src={Img2} alt="" className='footer-img' />
                        VK.com
                    </li>
                    <li className="footer-list-item">
                        <img src={Img1} alt="" className='footer-img' />
                        Facebook
                    </li>
                    <li className="footer-list-item">
                        <img src={Img3} alt="" className='footer-img' />
                        Instagram
                    </li>
                </ul>
                </div>
            </>
        )
    }

    return (
        <>
            <footer className="footer">
                <div className="wrap">
                    <div className="footer-inner">
                        <div className="footer-text">
                            <img src={logo} alt="" />
                            <p className="f-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p>
                        </div>

                        <div className="footer-lists-inner">
                            <List title={'Основные ссылки'} item1={'О компании'} item2={'Каталог'} item3={'Доставка'} item4={'Оплата'} />

                            <List title={'Категории'} item1={'Мужская одежда'} item2={'Женская одежда'} item3={'Детская одежда'} item4={'Для животных'}/>

                            <List title={'ПОЛЕЗНЫЕ ССЫЛКИ'} item1={'Таблица размеров'} item2={'Блог о моде'} item3={'Наша миссия'}/>

                            {/* <List title={'СОЦ СЕТИ'} item1={'VK.com'} item2={'Facebook'} item3={'Instagram'} img1={Img1} img2={Img2} img3={Img3}/> */}

                            <Footer_ul/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer