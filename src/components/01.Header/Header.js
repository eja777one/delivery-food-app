import React from 'react';
import styles from './Header.module.css';
import logo from './assets/LOGOS.png';
import caller from './assets/Calling.png';
import stick from './assets/Stick.png';
import burgerMenu from './assets/burger.png';
import buyIcon from './assets/Buy2.png';
import gStick from './assets/gLine.png';
import { useSelector } from 'react-redux';
import { selectColds } from '../../store/colds/coldsSelector';
import { selectHots } from '../../store/hots/hotsSelector';
import { selectMeats } from '../../store/meat/meatSelector';

const Header = (props) => {
    const colds = useSelector(selectColds);
    const hots = useSelector(selectHots);
    const meats = useSelector(selectMeats);

    const coldsItems = colds.filter(el => el.count > 0);
    const hotsItems = hots.filter(el => el.count > 0);
    const meatsItems = meats.filter(el => el.count > 0);

    const items = coldsItems.length + hotsItems.length + meatsItems.length;

    return (
        <header className={styles['header-block']}>
            <div className={styles.header}>
                <button className={styles['burger-menu']}><img src={burgerMenu} alt='menu' /></button>
                <a href='#'><img src={logo} alt='logo' /></a>
                <input className={styles.search} type='text' placeholder='Введите адрес доставки' />
                <div className={styles.contacts}>
                    <div className={styles['caller-block']}>
                        <img className={styles.caller} src={caller} />
                    </div>
                    <div>
                        <div className={styles['contact-text']}>Контакты:</div>
                        <div className={styles['contact-number']}>+7 (917) 510-57-59</div>
                    </div>
                </div>
                <button onClick={() => {props.openCart()}} className={styles.cart}>
                    <span className={styles['cart-text']}>Корзина</span>
                    <img src={stick} alt='' />
                    <span className={styles['cart-count']}>{items}</span>
                </button>
                <div className={styles.cart2}>
                    <img src={buyIcon} alt='buyIcon' />
                    <img src={gStick} alt='' />
                    <span>корзина</span>
                </div>
            </div>
            <input className={styles['search-mobil']} type='text' placeholder='Введите адрес доставки' />
        </header>
    )
}

export default Header