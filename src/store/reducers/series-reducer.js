import {genresAPI, seriesAPI} from "../../api/api.js";


const SET_SERIES = "series-reducer/SET_SERIES"
const SET_CURRENT_PAGE = "series-reducer/SET_CURRENT_PAGE"
const SET_SERIES_PAGES_TOTAL_COUNT = "series-reducer/SET_SERIES_PAGES_TOTAL_COUNT"
const SET_GENRES = "series-reducer/SET_GENRES"


export const setSeries  = (series) =>({type:SET_SERIES, payload:{series}})
export const setGenres  = (genres) =>({type:SET_GENRES, payload:{genres}})
export const setCurrentPage  = (currentPage) =>({type:SET_CURRENT_PAGE, payload:{currentPage}})
export const setSeriesPagesTotalCount  = (seriesPagesTotalCount) =>({type:SET_SERIES_PAGES_TOTAL_COUNT, payload:{seriesPagesTotalCount}})


export const requestSeries =(currentPage,genreforURL,sort_by) =>{
    return async (dispatch) =>{
        const response = await seriesAPI.getSeries(currentPage,genreforURL,sort_by)
        dispatch(setSeries(response.data.results))
        dispatch(setSeriesPagesTotalCount(response.data.total_pages))
    }
}

export const requestGenres =(type) =>{
    return async (dispatch)=>{
        const response = await genresAPI.getGenres(type)
        dispatch(setGenres(response.data.genres))
    }
}


const initialState ={
    series:[],
    currentPage:1,
    seriesPagesTotalCount:0,
    genres:[]
}

const moviesReducer= (state = initialState,action)=>{
    switch (action.type){
        case SET_SERIES:
        case SET_CURRENT_PAGE:
        case SET_SERIES_PAGES_TOTAL_COUNT:
        case SET_GENRES:
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