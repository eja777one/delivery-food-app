import React from 'react';
import styles from './Product.module.css'
import { useDispatch } from 'react-redux/es/exports'
import { setActive, addItem, deleteItem } from '../../store/01.actions/actions';

const Product = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.product}>
            <a href='#' onClick={() => { dispatch(setActive(props.id)) }}>
                {props.count ? (
                    <div className={styles.count}>
                        <div className={styles['count-text']}>{props.count}</div>
                    </div>) : ''
                }
                <img src={props.img} />
                <div className={styles.description}>
                    <div className={styles['title-block']}>
                        <span className={styles.title}>{props.title}</span>
                        <span className={styles.weight}>{props.weight}</span>
                    </div>
                    <p className={styles.text}>{props.text}</p>
                </div>
            </a>
            <div className={styles['price-block']}>
                <div className={styles['price-block-flex']}>
                    <button
                        onClick={() => { dispatch(deleteItem(props.id)) }}
                        className={styles['min-button']}>
                        -
                    </button>
                    <div className={styles.price}>{props.price + ' ₽'}</div>
                    <button
                        onClick={() => { dispatch(addItem(props.id)) }}
                        className={styles['min-button']}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product