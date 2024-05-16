import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/footer';
import Slider from './components/slider/Slider';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import SectionFour from './components/sectionFour/sectionFOur';
import SectionFIve from './components/sectionFive/SectionFIve';
import SectionSix from './components/sectionSix/SectionSix';

function App() {
  return (
    <>
        <Hero/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFIve title={'Новые модели'}/>
        <SectionSix />
        <SectionFIve title={'СКИДКИ ДО 90%'} />
        <Footer/>
    </>
  );
}

export default App;
