import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import trendingReducer from "./reducers/trending-reducer.js";
import thunk from 'redux-thunk'
import moviesReducer from "./reducers/movies-reducer.js";


const reducers = combineReducers({
    trending:trendingReducer,
    movies:moviesReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;