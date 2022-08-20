import React from 'react';
import { useSelector } from 'react-redux';
import { selectColds } from './store/colds/coldsSelector';
import { selectHots } from './store/hots/hotsSelector';
import { selectMeats } from './store/meat/meatSelector';
import Header from './components/01.Header/Header';
import Hero from './components/02.Hero/Hero';
import Navbar from './components/03.Navbar/Navbar';
import Compilation from './components/04.Compilation/Compilation';
import About from './components/06.About/About';
import Contacts from './components/07.Contacts/Contacts';
import Footer from './components/08.Footer/Footer';
import './App.css';

function App() {
    const colds = useSelector(selectColds);
    const hots = useSelector(selectHots);
    const meats = useSelector(selectMeats);

    return (
      <div className="App">
        <Header />
        <Hero />
        <Navbar />
        <Compilation title='Холодные закуски' data={colds} />
        <Compilation title='Горячие закуски' data={hots} />
        <Compilation title='Мясные блюда' data={meats} />
        <About />
        <Contacts />
        <Footer />
      </div>
    );
  }

export default App;
