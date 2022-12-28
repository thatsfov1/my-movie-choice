import {trendingAPI} from "../../api/api.js";


const SET_TRENDING_MOVIES = 'trending-reducer/SET_TRENDING_MOVIES'
const SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT = 'trending-reducer/SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT'


export const setTrendingMovies = (trendingMovies) =>({type:SET_TRENDING_MOVIES, payload:{trendingMovies}})
export const setTrendingMoviesPagesTotalCount = (trendingMoviesPagesTotalCount) =>({type:SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT, payload:{trendingMoviesPagesTotalCount}})


export const requestTrending = (currentPage) => async (dispatch) =>{
        const response = await trendingAPI.getTrending(currentPage)
        dispatch(setTrendingMovies(response.data.results))
        dispatch(setTrendingMoviesPagesTotalCount(response.data.total_pages))
    }


const initialState = {
    trendingMovies:[],
    trendingMoviesPagesTotalCount:[],
}

const trendingReducer = (state = initialState,action) =>{
    switch (action.type){
        case SET_TRENDING_MOVIES:
        case SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT:
        {
            return{
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export default trendingReducer;

