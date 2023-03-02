import React from 'react'
import classes from "./ContentData.module.css"
import {img_500, unavailable} from "../../config/config.js";
import Rating from "@mui/material/Rating";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button, IconButton} from "@mui/material";
import ContentInfo from "./ContentInfo.jsx";
import CarouselRec from "./CarouselRec.jsx";
import CarouselAct from "./CarouselAct.jsx";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCredits, getItemLink, getRecommendation, getSingleItem} from "../../api/api.js";

const ContentData = () => {

    const {id} = useParams()
    const {media_type} = useParams()
    const navigate = useNavigate()

    const {data:itemData} = useQuery({
        queryKey:['single-item',media_type,id],
        queryFn: () => getSingleItem(media_type,id)
    })

    const {data:itemCredits} = useQuery({
        queryKey:['single-item-credits',media_type,id],
        queryFn: () => getCredits(media_type,id)
    })

    const {data:itemRecommendations} = useQuery({
        queryKey:['single-item-recommendations',media_type,id],
        queryFn:() => getRecommendation(media_type,id)
    })

    const {data:itemLink} = useQuery({
        queryKey:['single-item-link',media_type,id],
        queryFn: () => getItemLink(media_type,id)
    })

    return ( <div>
            <IconButton className={classes.previous} aria-label="delete" onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon />
            </IconButton>
        <div className={classes.container}>
            <div className={classes.picture}>
                {<img alt='poster' src={itemData?.poster_path ? `${img_500}/${itemData?.poster_path}` : unavailable}/>}
                <div className={classes.rating}>
                    Users Rating({itemData?.vote_count}):
                    <Rating name="read-only" value={itemData?.vote_average || null} readOnly max={10} precision={0.1}  />
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.title}>
                    {itemData?.title || itemData?.name}({
                    (itemData?.release_date || itemData?.first_air_date || "-----").substring(0, 4)}
                    )
                </div>
                <div className={classes.tagname}>
                    {itemData?.tagline && <i>{itemData?.tagline}</i>}
                </div>
                <div className={classes.movieInfo}>
                    {itemData?.genres && itemData?.genres.length > 0 && <span
                        className={classes.category}>
                        Genre: <span className={classes.categoryValues}>
                        {itemData?.genres.map(genre => genre.name).reduce((acc, curr) => acc + "," + curr)}
                    </span>
                    </span>}

                    <ContentInfo contentData={itemData} content="type" text="Type of series: " add=""/>
                    <ContentInfo contentData={itemData} content="runtime" text="Run time: " add=" min"/>
                    {itemData?.budget !== 0 &&
                        <ContentInfo contentData={itemData} content="budget" text="Budget: " add='$'/>
                    }
                    <ContentInfo contentData={itemData} content="status" text="Status: " add=''/>

                </div>
                {itemData?.overview && <div className={classes.overview}>
                    {itemData?.overview}
                </div>}
                <CarouselAct credits={itemCredits?.cast}/>
                {itemLink && <Button variant="contained" disableElevation color="secondary" target="_blank"
                                         href={`https://www.youtube.com/watch?v=${itemLink}`}>
                    <YouTubeIcon/> Watch the trailer
                </Button>}
            </div>
        </div>
            {itemRecommendations?.length>1 && <div className={classes.recommendation}>
                <div className={classes.recommend}>Recommendations</div>
                <div>
                    <CarouselRec recommend={itemRecommendations}/>
                </div>
            </div>}
        </div>
    )
}

export default ContentData