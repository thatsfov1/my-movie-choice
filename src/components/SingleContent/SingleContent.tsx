import React from "react";
import s from "./SingleContent.module.css";
import {img_300, unavailable} from "../../config/config.ts";
import {Badge} from "@mui/material";
import {useNavigate} from "react-router-dom";


type Props = {
    title:string,
    id:number,
    media_type:string,
    date:number,
    poster:string,
    vote_average:number
}

const SingleContent = ({title, id, media_type, date, poster, vote_average}:Props) => {

    const navigate = useNavigate()

    return <div className={s.container} onClick={() => navigate(`/content/${media_type}/${id}`)}>
        <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'}/>
        <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <span className={s.title}>{title}</span>
        <span className={s.subtitle}>{media_type === 'tv' ? "TV series" : "Movie" }
            <span>{date}</span>
        </span>


    </div>;
}

export default SingleContent;
