import { combineReducers } from "redux";
import { operationsReducer } from "./todoApp/reducers/operations";


export const rootReducer = combineReducers({
    operationsReducer,
    // more reducer can be added here
});
