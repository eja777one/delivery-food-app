import { SET_ACTIVE, SET_INACTIVE, ADD_ITEM, DELETE_ITEM, RESET_COUNT } from "../02.consts/consts"

export const setActive = (id) => {
    return { type: SET_ACTIVE, id }
}

export const setInactive = (id) => {
    return { type: SET_INACTIVE, id }
}

export const addItem = (id) => {
    return { type: ADD_ITEM, id }
}

export const deleteItem = (id) => {
    return { type: DELETE_ITEM, id }
}

export const resetCount = (id) => {
    return { type: RESET_COUNT, id }
}