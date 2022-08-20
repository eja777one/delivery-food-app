import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a className={styles.active } href='#'>Холодные закуски</a>
            <a href='#'>Горячие закузки</a>
            <a href='#'>Мясные блюда</a>
            <a href='#'>Супы</a>
            <a href='#'>Рыбные блюда</a>
            <a href='#'>Гриль меню</a>
            <a href='#'>Фирменные блюда</a>
            <a href='#'>Напитки</a>
        </div>
    )
}

export default Navbar