import React from 'react'
import './SectionThree.css'
import Guy from '../../assets/images/Rectangle 3.png';
import Girl from '../../assets/images/Rectangle 3.1.png';

const SectionThree = () => {

    const Box = ({
        text_one,
        text_two,
        image
    }) => {

        const Arrow = () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" viewBox="0 0 80 30" fill="none">
                    <rect width="80" height="30" fill="#D7B399"/>
                    <path d="M50.3536 15.3536C50.5488 15.1583 50.5488 14.8417 50.3536 14.6464L47.1716 11.4645C46.9763 11.2692 46.6597 11.2692 46.4645 11.4645C46.2692 11.6597 46.2692 11.9763 46.4645 12.1716L49.2929 15L46.4645 17.8284C46.2692 18.0237 46.2692 18.3403 46.4645 18.5355C46.6597 18.7308 46.9763 18.7308 47.1716 18.5355L50.3536 15.3536ZM30 15.5L50 15.5L50 14.5L30 14.5L30 15.5Z" fill="white"/>
                </svg>
            )
        }

        return(
            <>
                <div className="section-three-box">
                    <div className="seciton-three-box-content">
                        <div className="box-text-inner">
                            <div className="box-text-one"><span className="black-text">{text_one}</span> КОЛЛЕКЦИЯ</div>
                            <div className="box-text-two">Обувь, полуверы, костюмы</div>
                        </div>

                        <button className="box-btn">
                            <Arrow/>
                        </button>
                    </div>

                    <img src={image} alt="" className='box-img'/>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="section-three">
                <div className="wrap">
                    <div className="section-three-inner">
                        <Box text_one={'МУЖСКАЯ'} image={Guy}/>
                        <Box text_one={'ЖЕНСКАЯ'} image={Girl}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree