import {modalAPI, moviesAPI} from "../../api/api.js";

const GET_CONTENT_DATA = "modal-reducer/GET_CONTENT_DATA"
const GET_CONTENT_VIDEO = "modal-reducer/GET_CONTENT_VIDEO"
const SET_RECOMMENDATION = "modal-reducer/SET_RECOMMENDATION"
const SET_CREDITS = "modal-reducer/SET_CREDITS"


const getContentData = (contentData) => ({type: GET_CONTENT_DATA, payload: {contentData}})
const getContentVideo = (contentVideo) => ({type: GET_CONTENT_VIDEO, payload: {contentVideo}})
const setRecommendation  = (recommend) =>({type:SET_RECOMMENDATION, payload:{recommend}})
const setCredits  = (credits) =>({type:SET_RECOMMENDATION, payload:{credits}})

export const requestSingleContent = (media_type, id) => {
    return async (dispatch) => {
        const response = await modalAPI.getSingleContent(media_type, id)
        dispatch(getContentData(response.data))
    }
}

export const requestSingleVideo = (media_type,id) =>{
    return async (dispatch) =>{
        const response = await modalAPI.getSingleContentLink(media_type,id)
        dispatch(getContentVideo(response.data.results[0]?.key))
    }
}

export const requestRecommendations =(media_type,id) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getRecommendation(media_type,id)
        dispatch(setRecommendation(response.data.results))
    }
}

export const requestCredits =(media_type,id) =>{
    return async (dispatch)=>{
        const response = await moviesAPI.getCredits(media_type,id)
        dispatch(setCredits(response.data.cast))
    }
}

const initialState = {
    contentData: [],
    contentVideo: [],
    recommend:[],
    credits:[]
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT_DATA:
        case GET_CONTENT_VIDEO:
        case SET_RECOMMENDATION:
        case SET_CREDITS:
        {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export default modalReducer