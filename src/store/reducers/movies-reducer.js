import {moviesAPI} from "../../api/api.js";

const SET_MOVIES = "movies-reduser/SET_MOVIES"
const SET_CURRENT_PAGE = "movies-reduser/SET_CURRENT_PAGE"
const SET_MOVIES_PAGES_TOTAL_COUNT = "movies-reduser/SET_MOVIES_PAGES_TOTAL_COUNT"
const SET_GENRES = "movies-reduser/SET_GENRES"


export const setMovies  = (movies) =>({type:SET_MOVIES, movies})
export const setGenres  = (genres) =>({type:SET_GENRES, genres})
export const setCurrentPage  = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
export const setMoviesPagesTotalCount  = (moviesPagesTotalCount) =>({type:SET_MOVIES_PAGES_TOTAL_COUNT, moviesPagesTotalCount})



export const requestMovies =(currentPage) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getMovies(currentPage)
        dispatch(setMovies(response.data.results))
        dispatch(setMoviesPagesTotalCount(response.data.total_pages))
    }
}
// todo: to end genres P.S. BLL already done
export const requestGenres =(type) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getGenres(type)
        dispatch(setGenres(response.data.genres))
    }
}



const initialState ={
    movies:[],
    currentPage:1,
    moviesPagesTotalCount:[],
    genres:[]
}

const moviesReducer= (state = initialState,action)=>{
    switch (action.type){
        case SET_MOVIES: {
            return{
                ...state,
                movies:action.movies
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_MOVIES_PAGES_TOTAL_COUNT:{
            return{
                ...state,
                moviesPagesTotalCount:action.moviesPagesTotalCount
            }
        }
        case SET_GENRES:{
            return {
                ...state,
                genres: action.genres
            }
        }
        default:
            return state
    }
}

export default moviesReducer