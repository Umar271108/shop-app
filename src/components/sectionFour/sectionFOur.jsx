import React from 'react'
import './SectionFour.css'
import Card_img from '../../assets/images/Rectangle.png'

const SectionFour = () => {

    const Card = () => {
        return(
            <>
                <div className="section-four-card">
                    <img src={Card_img} alt="" className="card-img" />
                    <div className="card-text">ПЛАТЬЯ</div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="section-four">
                <div className="wrap">
                    <div className="section-four-inner">
                        <div className="section-four-line">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="section-four-line">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionFour