import prod1 from './../../assets/prod1.png'
import prod2 from './../../assets/prod2.png'
import prod3 from './../../assets/prod3.png'
import prod4 from './../../assets/prod4.png'

const hotPresist = [
    {
        id: 1,
        img: prod3,
        title: 'Гусь',
        weight: 'Вес: 225 г',
        text: 'Фаршированный яблоками',
        price: '7 900 ₽'
    },
    {
        id: 2,
        img: prod4,
        title: 'Утка',
        weight: 'Вес: 225 г',
        text: 'Фаршированная рисом, курагой и айвой',
        price: '3 230 ₽'
    },
    {
        id: 3,
        img: prod1,
        title: 'Ягненок',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: '620 ₽'
    },
    {
        id: 4,
        img: prod2,
        title: 'Индейка',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: '450 ₽'
    },
    {
        id: 5,
        img: prod3,
        title: 'Гусь',
        weight: 'Вес: 225 г',
        text: 'Фаршированный яблоками',
        price: '7 900 ₽'
    },
    {
        id: 6,
        img: prod4,
        title: 'Утка',
        weight: 'Вес: 225 г',
        text: 'Фаршированная рисом, курагой и айвой',
        price: '3 230 ₽'
    },
    {
        id: 7,
        img: prod1,
        title: 'Ягненок',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: '620 ₽'
    },
    {
        id: 8,
        img: prod2,
        title: 'Индейка',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: '450 ₽'
    },
]

export const hotReducer = (state = hotPresist, action) => {
    return state
}