import { SET_ACTIVE, SET_INACTIVE, ADD_ITEM, DELETE_ITEM, RESET_COUNT } from "../02.consts/consts"
import prod1 from './../00.assets/prod1.png'
import prod2 from './../00.assets/prod2.png'
import prod3 from './../00.assets/prod3.png'
import prod4 from './../00.assets/prod4.png'

const coldPresist = [
    {
        id: 'c1',
        img: prod1,
        title: 'Ягненок',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c2',
        img: prod2,
        title: 'Индейка',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 450,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c3',
        img: prod3,
        title: 'Гусь',
        weight: 'Вес: 225 г',
        text: 'Фаршированный яблоками',
        price: 7900,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c4',
        img: prod4,
        title: 'Утка',
        weight: 'Вес: 225 г',
        text: 'Фаршированная рисом, курагой и айвой',
        price: 3230,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c5',
        img: prod1,
        title: 'Ягненок',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 620,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c6',
        img: prod2,
        title: 'Индейка',
        weight: 'Вес: 225 г',
        text: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 450,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c7',
        img: prod3,
        title: 'Гусь',
        weight: 'Вес: 225 г',
        text: 'Фаршированный яблоками',
        price: 7900,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
    {
        id: 'c8',
        img: prod4,
        title: 'Утка',
        weight: 'Вес: 225 г',
        text: 'Фаршированная рисом, курагой и айвой',
        price: 3230,
        proteins: '17.23',
        fats: '7.63',
        carbohydrates: '22.35',
        kcal: '234',
        weight2: '210 г',
        active: false,
        count: 0,
        total: 0,
    },
]

export const coldReducer = (state = coldPresist, action) => {
    switch (action.type) {
        case SET_ACTIVE:
            return state.map((el) => el.id === action.id ? { ...el, active: true } : el);
        case SET_INACTIVE:
            return state.map((el) => el.id === action.id ? { ...el, active: false } : el);
        case ADD_ITEM:
            return state.map((el) => el.id === action.id ? {
                ...el,
                count: el.count + 1,
                total: el.price * (el.count + 1),
            }
                : el)
        case DELETE_ITEM:
            return state.map((el) => el.id === action.id ? {
                ...el,
                count: el.count == 0 ? el.count : el.count - 1,
                total: el.price * (el.count - 1)
            } : el)
        case RESET_COUNT:
            return state.map((el) => el.id === action.id ? {
                ...el,
                count: 0,
                total: 0,
            } : el)
        default:
            return state
    }
}