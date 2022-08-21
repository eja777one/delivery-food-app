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
import ProductCart from './components/09.ProductCart/ProductCart';
import Cart from './components/10.Cart/Cart';
import { useState } from 'react';
import './App.css';

function App() {
  const [cartIsActive, setCartIsActive] = useState(false)

  const colds = useSelector(selectColds);
  const hots = useSelector(selectHots);
  const meats = useSelector(selectMeats);

  const activeProduct = colds.filter((el) => (el.active));
  console.log(cartIsActive)

  const openCartHandler = () => {
    setCartIsActive((prev) => !prev)
  }

  const A = (
    <div className="App">
      <Header openCart={openCartHandler} />
      {activeProduct.length ? '' : <Hero />}
      <Navbar />
      {activeProduct.length ? <ProductCart active={activeProduct[0]} /> : ''}
      {activeProduct.length ? <Compilation title='С ЭТИМ ТОВАРОМ ПОКУПАЮТ' data={colds} /> : ''}
      {activeProduct.length ? '' : <Compilation title='ХОЛОДНЫЕ ЗАКУСКИ' data={colds} />}
      {activeProduct.length ? '' : <Compilation title='ГОРЯЧИЕ ЗАКУСКИ' data={hots} />}
      {activeProduct.length ? '' : <Compilation title='МЯСНЫЕ БЛЮДА' data={meats} />}
      {activeProduct.length ? '' : <About />}
      <Contacts />
      <Footer />
    </div>
  )

  const B = (
    <div className="App">
      <Header openCart={setCartIsActive} />
      <Navbar />
      <Cart openCart={openCartHandler} />
      <Footer />
    </div>
  )

  return (<div>{cartIsActive ? B : A}</div>);
}

export default App;
