import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import trendingReducer from "./reducers/trending-reducer.js";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    trending:trendingReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;