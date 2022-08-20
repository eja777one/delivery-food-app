import React from 'react'
import styles from './Header.module.css'
import logo from './../../assets/LOGOS.png'
import caller from './../../assets/Calling.png'
import stick from './../../assets/Stick.png'

const Header = () => {
    return (
        <header className={styles['header-block']}>
            <div className={styles.header}>
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
                <div className={styles.cart}>
                    <span className={styles['cart-text']}>Корзина</span>
                    <img src={stick} alt='' />
                    <span className={styles['cart-count']}>4</span>
                </div>
            </div>
            <input className={styles['search-mobil']} type='text' placeholder='Введите адрес доставки' />
        </header>
    )
}

export default Header