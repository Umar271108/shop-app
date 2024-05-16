import './Hero.css'
import Header from '../header/Header'
import SectionOne from '../sectionOne/SectionOne'

function Hero(){
    return(
        <>
            <section className="hero">
                <Header/>
                <SectionOne/>
            </section>
        </>
    )
}

export default Hero