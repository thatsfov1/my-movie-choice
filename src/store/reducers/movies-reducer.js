import {genresAPI, moviesAPI} from "../../api/api.js";

const SET_MOVIES = "movies-reducer/SET_MOVIES"
const SET_MOVIES_PAGES_TOTAL_COUNT = "movies-reducer/SET_MOVIES_PAGES_TOTAL_COUNT"
const SET_GENRES = "movies-reducer/SET_GENRES"



export const setMovies  = (movies) =>({type:SET_MOVIES, payload :{movies}})
export const setGenres  = (genres) =>({type:SET_GENRES, payload:{genres}})
export const setMoviesPagesTotalCount  = (moviesPagesTotalCount) =>({type:SET_MOVIES_PAGES_TOTAL_COUNT, payload:{moviesPagesTotalCount} })


export const requestMovies =(currentPage,genreforURL,sort_by) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getMovies(currentPage,genreforURL,sort_by)
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
    moviesPagesTotalCount:0,
    genres:[],

}

const moviesReducer= (state = initialState,action)=>{
    switch (action.type){
        case SET_MOVIES:
        case SET_GENRES:
        case SET_MOVIES_PAGES_TOTAL_COUNT:
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