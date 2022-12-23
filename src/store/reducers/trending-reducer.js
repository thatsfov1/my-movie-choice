import {trendingAPI} from "../../api/api.js";


const SET_TRENDING_MOVIES = 'SET_TRENDING_MOVIES'
const SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT = 'SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'



export const setTrendingMovies = (movies) =>({type:SET_TRENDING_MOVIES, movies})
export const setTrendingMoviesPagesTotalCount = (moviesPagesCount) =>({type:SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT, moviesPagesCount})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})


export const requestTrending = (currentPage) => async (dispatch) =>{
        const response = await trendingAPI.getTrending(currentPage)
        dispatch(setTrendingMovies(response.data.results))
        dispatch(setTrendingMoviesPagesTotalCount(response.data.total_pages))
    }


const initialState = {
    trendingMovies:[],
    trendingMoviesPagesTotalCount:[],
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
        case SET_TRENDING_MOVIES_PAGES_TOTAL_COUNT:{
            return{
                ...state,
                trendingMoviesPagesTotalCount:action.moviesPagesCount
            }
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage:action.currentPage
            }
        }
        default:
            return state
    }
}

export default trendingReducer;

