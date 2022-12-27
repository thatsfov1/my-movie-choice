import React, {useEffect} from 'react'
import ContentData from "./ContentData.jsx";
import {connect} from "react-redux";
import {
    requestCredits,
    requestRecommendations,
    requestSingleContent,
    requestSingleVideo
} from "../../store/reducers/modal-reducer.js";


import {useParams} from "react-router-dom";

const ContentDataContainer = (props) => {

    const {id} = useParams()
    const {media_type} = useParams()

    useEffect(()=>{
        props.requestSingleContent(media_type,id)
        props.requestSingleVideo(media_type,id)
        props.requestRecommendations(media_type,id)
        props.requestCredits(media_type,id)
    },[id])

  return (
    <div>
      <ContentData contentData={props.contentData}
                   contentVideo={props.contentVideo}
                   recommend={props.recommend}
                   credits={props.credits}
      />
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        contentData:state.single.contentData,
        contentVideo:state.single.contentVideo,
        recommend:state.single.recommend,
        credits:state.single.credits

    }
}

export default connect(mapStateToProps,{requestSingleContent, requestSingleVideo,requestRecommendations,requestCredits})(ContentDataContainer)

