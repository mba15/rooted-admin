import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import clientContact from "./clientContact.js";

const rootReducer = combineReducers({clientContact});

let store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
})

export default store;

