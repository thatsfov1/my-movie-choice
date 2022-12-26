import {genresAPI, moviesAPI} from "../../api/api.js";

const SET_MOVIES = "movies-reducer/SET_MOVIES"
const SET_CURRENT_PAGE = "movies-reducer/SET_CURRENT_PAGE"
const SET_MOVIES_PAGES_TOTAL_COUNT = "movies-reducer/SET_MOVIES_PAGES_TOTAL_COUNT"
const SET_GENRES = "movies-reducer/SET_GENRES"



export const setMovies  = (movies) =>({type:SET_MOVIES, payload :{movies}})
export const setGenres  = (genres) =>({type:SET_GENRES, payload:{genres}})
export const setCurrentPage  = (currentPage) =>({type:SET_CURRENT_PAGE, payload:{currentPage}})

export const setMoviesPagesTotalCount  = (moviesPagesTotalCount) =>({type:SET_MOVIES_PAGES_TOTAL_COUNT, payload:{moviesPagesTotalCount} })



export const requestMovies =(currentPage,genreforURL) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getMovies(currentPage,genreforURL)
        dispatch(setMovies(response.data.results))
        dispatch(setMoviesPagesTotalCount(response.data.total_pages))
    }
}

export const requestGenres =(type) =>{
    return async (dispatch)=>{
        const response = await genresAPI.getGenres(type)
        dispatch(setGenres(response.data.genres))
    }
}





const initialState ={
    movies:[],
    currentPage:1,
    moviesPagesTotalCount:0,
    genres:[],

}

const moviesReducer= (state = initialState,action)=>{
    switch (action.type){
        case SET_MOVIES:
        case SET_GENRES:
        case SET_MOVIES_PAGES_TOTAL_COUNT:
        case SET_CURRENT_PAGE:
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

export default moviesReducer