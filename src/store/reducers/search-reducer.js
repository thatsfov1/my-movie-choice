import {searchAPI} from "../../api/api.js";

const SET_SEARCH_RESULTS ="search-reducer/SET_SEARCH_RESULTS"
const SET_RESULTS_TOTAL_COUNT = 'search-reducer/SET_RESULTS_TOTAL_COUNT'

export const setSearchResults = (results) => ({type:SET_SEARCH_RESULTS, payload:{results}})
export const setResultsTotalCount = (resultsPagesTotalCount) => ({type:SET_RESULTS_TOTAL_COUNT, payload:{resultsPagesTotalCount}})


export const requestResults =(type,searchText,currentPage)=>{
    return async (dispatch) =>{
        const response = await searchAPI.toSearch(type,searchText,currentPage)
        dispatch(setSearchResults(response.data.results))
        dispatch(setResultsTotalCount(response.data.total_pages))
    }
}



const initialState = {
    searchResults:[],
    resultsPagesTotalCount:0
}

const searchReducer =(state = initialState,action)=>{
    switch (action.type){
        case SET_SEARCH_RESULTS:
        case SET_RESULTS_TOTAL_COUNT:
        {
            return{
                ...state,
                ...action.payload
            }
        }
    }
}

export default searchReducer;