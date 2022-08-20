import { combineReducers } from "redux";
import { coldReducer } from "./colds/coldsReducer";
import { hotReducer } from "./hots/hotsReducer";
import { meatReducer } from "./meat/meatReduces";

export const rootReducer = combineReducers({
    colds: coldReducer,
    hots: hotReducer,
    meats: meatReducer
})