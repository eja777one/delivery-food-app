import styles from './ProductCart.module.css'
import arrow from './assets/Arrow.png'
import stick from './assets/Stick.png'
import shoppingBag from './assets/shoppingBag.png'
import line from './assets/Line.png'
import { useDispatch } from 'react-redux/es/exports'
import { setInactive, addItem } from '../../store/01.actions/actions';

const ProductCart = (props) => {

    const dispatch = useDispatch();

    return (
        <section className={styles['product-block']} >
            <div className={styles.cart}>
                <div>
                    <button onClick={() => { dispatch(setInactive(props.active.id)) }} className={styles.button}>
                        <img className={styles.arrow} src={arrow} alt='' />
                        <span>Вернуться назад</span>
                    </button>
                </div>
                <div className={styles.product}>
                    <img className={styles['product-img']} src={props.active.img} alt='' />
                    <div className={styles['product-description']}>
                        <h3>{props.active.title}</h3>
                        <p>{props.active.text}</p>
                        <div className={styles.weight}>{props.active.weight}</div>
                        <div className={styles['price-block']}>
                            <button onClick={() => { dispatch(addItem(props.active.id)) }} className={styles.button2}>
                                <span>Добавить</span>
                                <img src={stick} />
                                <img className={styles.shoppingBag} src={shoppingBag} />
                            </button>
                            <div className={styles.price}>{props.active.price + ' ₽'}</div>
                        </div>
                        <ul className={styles.params}>
                            <li>
                                <span>Белки</span>
                                <span>17.23</span>
                            </li>
                            <li>
                                <span>Жиры</span>
                                <span>7.63</span>
                            </li>
                            <li>
                                <span>Углеводы</span>
                                <span>22.35</span>
                            </li>
                            <li>
                                <span>Ккал</span>
                                <span>234</span>
                            </li>
                            <li>
                                <span>Вес</span>
                                <span>210 г</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className={styles.line} src={line} />

            </div>
        </section>
    )
}

export default ProductCart