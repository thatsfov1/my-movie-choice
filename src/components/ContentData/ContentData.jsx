import React from 'react'
import classes from "./ContentData.module.css"
import {img_500, unavailable} from "../../config/config.js";
import Rating from "@mui/material/Rating";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button} from "@mui/material";
import ContentInfo from "./ContentInfo.jsx";
import CarouselRec from "./CarouselRec.jsx";
import CarouselAct from "./CarouselAct.jsx";

const ContentData = ({contentVideo, contentData,recommend,credits}) => {

    return ( <div>
        <div className={classes.container}>
            <div className={classes.picture}>
                {<img src={contentData.poster_path ? `${img_500}/${contentData.poster_path}` : unavailable}/>}
                <div className={classes.rating}>
                    Users Rating({contentData.vote_count}): <Rating name="read-only" value={contentData.vote_average}
                                                                    readOnly max={10} precision={0.05}  />

                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.title}>
                    {contentData.title || contentData.name}({
                    (contentData.release_date || contentData.first_air_date || "-----").substring(0, 4)}
                    )
                </div>
                <div className={classes.tagname}>
                    {contentData.tagline && <i>{contentData.tagline}</i>}
                </div>
                <div className={classes.movieInfo}>
                    {contentData.title !== contentData.original_title &&
                        <div>Original title :{contentData.original_title}</div>}
                    {contentData.genres && contentData.genres.length > 0 && <span
                        className={classes.category}>
                        Genre: <span className={classes.categoryValues}>
                        {contentData.genres.map(genre => genre.name).reduce((acc, curr) => acc + "," + curr)}
                    </span>
                    </span>}

                    <ContentInfo contentData={contentData} content="type" text="Type of series: " add=""/>
                    <ContentInfo contentData={contentData} content="runtime" text="Run time: " add=" min"/>
                    {contentData.budget != 0 &&  <ContentInfo contentData={contentData} content="budget" text="Budget: " add='$'/>}
                    <ContentInfo contentData={contentData} content="status" text="Status: " add=''/>

                </div>
                {contentData.overview && <div className={classes.overview}>
                    {contentData.overview}
                </div>}
                <CarouselAct credits={credits}/>
                {contentVideo && <Button variant="contained" disableElevation color="secondary" target="_blank"
                                         href={`https://www.youtube.com/watch?v=${contentVideo}`}>
                    <YouTubeIcon/> Watch the trailer
                </Button>}
            </div>
        </div>
            {recommend.length>1 && <div className={classes.recommendation}>
                <div className={classes.recommend}>Recommendations</div>
                <div>
                    <CarouselRec recommend={recommend}/>
                </div>
            </div>}
        </div>
    )
}

export default ContentData