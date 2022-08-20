import styles from './Card.module.css'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'

const cards = [
    {
        id: 1,
        text: 'Свежайшие продукты',
        icon: <Icon1 />,
    },
    {
        id: 2,
        text: 'Быстрая доставка',
        icon: <Icon2 />,
    },
    {
        id: 3,
        text: 'Лучшие повара',
        icon: <Icon3 />,
    },
    {
        id: 4,
        text: 'Свежайшие продукты',
        icon: <Icon1 />,
    },
]

const content = cards.map((card) => {
    return (
        <div key={card.id} className={styles.card}>
            {card.icon}
            <div>{card.text}</div>
        </div>
    )
})

const Card = (props) => {
    return (
        <div className={styles.cards}>{content}</div>
    )
}

export default Card