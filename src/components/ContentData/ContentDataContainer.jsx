import React, {useEffect} from 'react'
import ContentData from "./ContentData.jsx";
import {connect} from "react-redux";
import {requestSingleContent, requestSingleVideo} from "../../store/reducers/modal-reducer.js";
import {useParams} from "react-router-dom";

const ContentDataContainer = (props) => {

    const {id} = useParams()
    const {media_type} = useParams()

    useEffect(()=>{
        props.requestSingleContent(media_type,id)
        props.requestSingleVideo(media_type,id)
    },[id])

  return (
    <div>
      <ContentData contentData={props.contentData}
                   contentVideo={props.contentVideo}
      />
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        contentData:state.single.contentData,
        contentVideo:state.single.contentVideo,
    }
}

export default connect(mapStateToProps,{requestSingleContent, requestSingleVideo})(ContentDataContainer)

