import styles from './Product.module.css'
import buy from './../../assets/Buy.png'
import prod1 from './../../assets/prod1.png'

const Product = (props) => {
    return (
        <div className={styles.product}>
            <div className={styles.count}>
                <div className={styles['count-text']}>3</div>
            </div>
            <img src={props.img} />
            <div className={styles.description}>
                <div className={styles['title-block']}>
                    <span className={styles.title}>{props.title}</span>
                    <span className={styles.weight}>{props.weight}</span>
                </div>
                <p className={styles.text}>{props.text}</p>
                <div className={styles['price-block']}>
                    <div className={styles['price-block-flex']}>
                        <button className={styles['min-button']}>-</button>
                        <div className={styles.price}>{props.price}</div>
                        {/* <button className={styles.button}>
                        <div>В корзину</div>
                        <img src={buy} />
                        </button> */}
                        <button className={styles['min-button']}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product