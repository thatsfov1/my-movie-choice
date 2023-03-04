import React from 'react'
import s from "./ContentData.module.css"
import {img_500, unavailable} from "../../config/config.ts";
import Rating from "@mui/material/Rating";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button, IconButton} from "@mui/material";
import ContentInfo from "./ContentInfo.tsx";
import CarouselRec from "./Recommendations.tsx";
import Casts from "./Casts.tsx";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCredits, getItemLink, getRecommendation, getSingleItem} from "../../api/api";
import {Genre} from "../../models/models";
import Preloader from "../Preloader/Preloader";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const ContentData = () => {

    const {id} = useParams()
    const {media_type} = useParams()
    const navigate = useNavigate()

    const {data:itemData, isError:isItemError, isLoading:isItemLoading} = useQuery({
        queryKey:['single-item',media_type,id],
        queryFn: () => getSingleItem(media_type!,id!)
    })

    const {data:itemCredits, isError:isCreditsError, isLoading:isCreditsLoading} = useQuery({
        queryKey:['single-item-credits',media_type,id],
        queryFn: () => getCredits(media_type!,id!)
    })

    const {data:itemRecommendations, isError:isRecError, isLoading:isRecLoading} = useQuery({
        queryKey:['single-item-recommendations',media_type,id],
        queryFn:() => getRecommendation(media_type!,id!)
    })

    const {data:itemLink, isError:isLinkError, isLoading:isLinkLoading} = useQuery({
        queryKey:['single-item-link',media_type,id],
        queryFn: () => getItemLink(media_type!,id!)
    })


    return ( <div>
            {isLinkLoading || isRecLoading || isCreditsLoading || isItemLoading && <Preloader/>}
            {isLinkError || isRecError || isCreditsError || isItemError && <ErrorPage/>}
            <IconButton className={s.previous} aria-label="delete" onClick={() => navigate(-1)}>
                <ArrowBackIosNewIcon />
            </IconButton>
        <div className={s.container}>
            <div className={s.picture}>
                {<img alt='poster' src={itemData?.poster_path ? `${img_500}/${itemData?.poster_path}` : unavailable}/>}
                <div className={s.rating}>
                    Users Rating({itemData?.vote_count}):
                    <Rating name="read-only" value={itemData?.vote_average || null} readOnly max={10} precision={0.1} />
                </div>
            </div>
            <div className={s.description}>
                <div className={s.title}>
                    {itemData?.title || itemData?.name}({
                    (itemData?.release_date || itemData?.first_air_date || "-----").substring(0, 4)}
                    )
                </div>
                <div className={s.tagname}>
                    {itemData?.tagline && <i>{itemData?.tagline}</i>}
                </div>
                <div className={s.movieInfo}>
                    {itemData?.genres && itemData?.genres.length > 0 && <span
                        className={s.category}>
                        Genre: <span className={s.categoryValues}>
                        {itemData?.genres.map((genre:Genre) => genre.name).reduce((acc:string, curr:string) => acc + "," + curr)}
                    </span>
                    </span>}

                    <ContentInfo contentData={itemData} content="type" text="Type of series: " add=""/>
                    <ContentInfo contentData={itemData} content="runtime" text="Run time: " add=" min"/>
                    {itemData?.budget !== 0 &&
                        <ContentInfo contentData={itemData} content="budget" text="Budget: " add='$'/>
                    }
                    <ContentInfo contentData={itemData} content="status" text="Status: " add=''/>

                </div>
                {itemData?.overview && <div className={s.overview}>
                    {itemData?.overview}
                </div>}
                <Casts credits={itemCredits?.cast}/>
                {itemLink && <Button variant="contained" disableElevation color="secondary" target="_blank"
                                         href={`https://www.youtube.com/watch?v=${itemLink}`}>
                    <YouTubeIcon/> Watch the trailer
                </Button>}
            </div>
        </div>
            {itemRecommendations?.length>1 && <div className={s.recommendation}>
                <div className={s.recommend}>Recommendations</div>
                <div>
                    <CarouselRec recommend={itemRecommendations}/>
                </div>
            </div>}
        </div>
    )
}

export default ContentData