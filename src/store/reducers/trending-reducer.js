import {trendingAPI} from "../../api/api.js";


const SET_TRENDING_MOVIES = 'SET_TRENDING_MOVIES'
const SET_TRENDING_MOVIES_TOTAL_COUNT = 'SET_TRENDING_MOVIES_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'



export const setTrendingMovies = (movies) =>{{type:SET_TRENDING_MOVIES, movies}}
export const setTrendingMoviesTotalCount = (moviesCount) =>{{type:SET_TRENDING_MOVIES_TOTAL_COUNT, moviesCount}}
export const setCurrentPage = (page) =>{{type:SET_TRENDING_MOVIES_TOTAL_COUNT, page}}


export const requestTrending = (currentPage) =>{
    return async(dispatch) =>{
        const response = await trendingAPI.getTrending(currentPage)
        dispatch(setTrendingMovies(response.data.results))
        dispatch(setTrendingMoviesTotalCount(response.data.total_results))
        di
    }
}

const initialState = {
    trendingMovies:[],
    trendingMoviesTotalCount:[],
    currentPage:1
}

const trendingReducer = (state = initialState,action) =>{
    switch (action.type){
        case SET_TRENDING_MOVIES:{
            return{
                ...state,
                trendingMovies:action.movies
            }
        }
        case SET_TRENDING_MOVIES_TOTAL_COUNT:{
            return{
                ...state,
                trendingMoviesTotalCount:action.moviesCount
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage:action.page
            }
        }
        default:
            return state
    }
}

export default trendingReducer;

