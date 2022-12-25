import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import trendingReducer from "./reducers/trending-reducer.js";
import thunk from 'redux-thunk'
import moviesReducer from "./reducers/movies-reducer.js";
import seriesReducer from "./reducers/series-reducer.js";
import searchReducer from "./reducers/search-reducer.js";
import modalReducer from "./reducers/modal-reducer.js";


const reducers = combineReducers({
    trending:trendingReducer,
    movies:moviesReducer,
    series:seriesReducer,
    search:searchReducer,
    single:modalReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;