import React from 'react'
import classes from "./ContentData.module.css"
import {img_500, unavailable} from "../../config/config.js";

const ContentData = ({contentVideo,contentData}) => {
  return (
    <div className={classes.container}>
        <div className={classes.picture}>
          { <img src={contentData.backdrop_path ? `${img_500}/${contentData.backdrop_path}` : unavailable}/>}
        </div>
    </div>
  )
}

export default ContentData