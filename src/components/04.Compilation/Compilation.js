import styles from './Compilation.module.css'
import Product from '../05.Product/Product'

const Cold = (props) => {
    const content = props.data.map(item => {
        return <Product
            key={item.id}
            img={item.img}
            title={item.title}
            weight={item.weight}
            text={item.text}
            price={item.price} />
    })

    return (
        <section className={styles.compilation}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.products}>{content}</div>
        </section>
    )
}

export default Cold