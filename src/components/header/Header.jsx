import './Header.css'
import logo from '../../assets/images/logo (1).png'
import arrow from '../../assets/images/Group 6.png'

function Header(){
    const Buy_icon = () => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M22.2936 11.4909L16.2385 2.40831C15.9632 2.13308 15.5505 1.85785 15.1376 1.85785C14.7248 1.85785 14.3119 1.99546 14.0367 2.40831L7.98165 11.4909H1.37615C0.550459 11.4909 0 12.0413 0 12.867C0 13.0046 0 13.1423 0 13.2799L3.44037 26.078C3.7156 27.179 4.81651 28.1423 6.05505 28.1423H23.945C25.1835 28.1423 26.2844 27.3166 26.5596 26.078L30 13.2799C30 13.1423 30 13.0046 30 12.867C30 12.0413 29.4495 11.4909 28.6239 11.4909H22.2936ZM11.0092 11.4909L15.1376 5.43583L19.2661 11.4909H11.0092ZM15.1376 22.5001C13.6239 22.5001 12.3853 21.2615 12.3853 19.7478C12.3853 18.234 13.6239 16.9955 15.1376 16.9955C16.6514 16.9955 17.8899 18.234 17.8899 19.7478C17.8899 21.2615 16.6514 22.5001 15.1376 22.5001Z" fill="#212121"/>
                </svg>
            </>
        )
    }

    return(
        <>
            <header>
                <div className="wrap flex">
                    <ul className="header-ul">
                        <a href="" className="header-link">
                            <li className="header-list">Для мужчин</li>
                        </a>
                        <a href="" className="header-link">
                            <li className="header-list">Для женщин</li>
                        </a>
                        <a href="" className="header-link">
                            <li className="header-list">Для детей</li>
                        </a>
                    </ul>

                    <img src={logo} alt="" />

                    <ul className="header-ul">
                        <a href="" className="header-link">
                            <li className="header-list">Оплата</li>
                        </a>
                        <a href="" className="header-link">
                            <li className="header-list">Доставка</li>
                        </a>
                    </ul>

                    <div className="icons-inner">
                        <Buy_icon/>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header