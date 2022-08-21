import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, resetCount } from './../../store/01.actions/actions';
import { selectColds } from '../../store/colds/coldsSelector';
import { selectHots } from '../../store/hots/hotsSelector';
import { selectMeats } from '../../store/meat/meatSelector';
import styles from './Cart.module.css';
import arrow from './assets/Arrow.png';
import addItemImg from './assets/Rectangle2.png';

const Cart = (props) => {
    const dispatch = useDispatch();

    const colds = useSelector(selectColds);
    const hots = useSelector(selectHots);
    const meats = useSelector(selectMeats);

    const coldsItems = colds.filter(el => el.count > 0);
    const hotsItems = hots.filter(el => el.count > 0);
    const meatsItems = meats.filter(el => el.count > 0);

    const cartItems = coldsItems.concat(hotsItems, meatsItems);

    let total = 0;

    for (let el of cartItems) {
        total += el.total
    }

    const freeShipping = 1500 - total;

    const content = cartItems.map(item => {
        return (
            <div key={item.id} className={styles.item}>
                <img src={item.img} alt='' />
                <div className={styles['item-description']}>
                    <h3 className={styles['item-title']}>{item.title}</h3>
                    <p className={styles['item-text']}>{item.text}</p>
                </div>
                <div>
                    <button
                        onClick={() => { dispatch(deleteItem(item.id)) }}
                        className={styles.button2}>
                        -
                    </button>
                    <span className={styles.count}>{item.count}</span>
                    <button
                        onClick={() => { dispatch(addItem(item.id)) }}
                        className={styles.button2}>
                        +
                    </button>
                </div>
                <div className={styles.price}>{item.total + ' ₽'}</div>
                <button
                    onClick={() => { dispatch(resetCount(item.id)) }}
                    className={styles.button2}>
                    x
                </button>
            </div>
        )
    })

    const itemsCount = content.length;

    return (
        <section className={styles.cart}>
            <div>
                <button onClick={()=>{props.openCart()}} className={styles.button}>
                    <img className={styles.arrow} src={arrow} alt='' />
                    <span>к выбору блюда</span>
                </button>
            </div>
            <div>
                <h2 className={styles.title}>КОРЗИНА</h2>
                <span className={styles['title-text']}>{'в корзине ' + itemsCount + ' товаров'}</span>
            </div>
            <div className={styles.items}>{content}</div>
            <h3 className={styles['add-to-cart']}>ДОБАВИТЬ К ЗАКАЗУ</h3>
            <div className={styles['add-items']}>
                <div className={styles['add-item']}>
                    <img src={addItemImg} alt='' />
                    <h4 className={styles['add-item-title']}>КВАС АНАНАСОВЫЙ</h4>
                    <div className={styles['add-item-button-block']}>
                        <span>Добавить</span>
                        <button className={styles.button3}>+</button>
                    </div>
                    <div className={styles['add-item-price']}>1640 ₽</div>
                </div>
                <div className={styles['add-item']}>
                    <img src={addItemImg} alt='' />
                    <h4 className={styles['add-item-title']}>ГРИСССИНИ</h4>
                    <div className={styles['add-item-button-block']}>
                        <span>Добавить</span>
                        <button className={styles.button3}>+</button>
                    </div>
                    <div className={styles['add-item-price']}>1640 ₽</div>
                </div>
                <div className={styles['add-item']}>
                    <img src={addItemImg} alt='' />
                    <h4 className={styles['add-item-title']}>ПИЦЦА ПЕППЕРОНИ</h4>
                    <div className={styles['add-item-button-block']}>
                        <span>Добавить</span>
                        <button className={styles.button3}>+</button>
                    </div>
                    <div className={styles['add-item-price']}>1640 ₽</div>
                </div>
                <div className={styles['add-item']}>
                    <img src={addItemImg} alt='' />
                    <h4 className={styles['add-item-title']}>ПИЦЦА ПЕППЕРОНИ</h4>
                    <div className={styles['add-item-button-block']}>
                        <span>Добавить</span>
                        <button className={styles.button3}>+</button>
                    </div>
                    <div className={styles['add-item-price']}>1640 ₽</div>
                </div>
            </div>
            <div className={styles.line} />
            <div className={styles['total-block']}>
                <div>
                    <div className={styles['total-block-total']}>
                        <span>Итого: </span>
                        {total}
                    </div>
                    <div className={styles['total-block-shipping']}>
                        {freeShipping > 0 ?
                            <span>До бесплатной доставки не хватает: {' ' +freeShipping + ' ₽'}</span>
                            : <span>Бесплатная доставка</span>}
                    </div>
                    <div className={styles['total-block-min']}>Минимальная сумма заказа 500 ₽. Бесплатная доставка от 1500 ₽</div>
                </div>
                <button className={styles['total-block-button']}>Оформить заказ</button>
            </div>
        </section >
    )
}

export default Cart