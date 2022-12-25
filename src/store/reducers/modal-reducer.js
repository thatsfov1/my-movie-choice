import {modalAPI} from "../../api/api.js";

const GET_CONTENT_DATA = "GET_CONTENT_DATA"
const GET_CONTENT_VIDEO = "GET_CONTENT_VIDEO"


const getContentData = (contentData) => ({type: GET_CONTENT_DATA, payload: {contentData}})
const getContentVideo = (contentVideo) => ({type: GET_CONTENT_VIDEO, payload: {contentVideo}})


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


const initialState = {
    contentData: [],
    contentVideo: []
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT_DATA:
        case GET_CONTENT_VIDEO: {
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