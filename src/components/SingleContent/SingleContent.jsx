import React from "react";
import classes from "./SingleContent.module.css";
import {img_300, unavailable} from "../../config/config.js";
import {Badge} from "@mui/material";


const SingleContent = ({title, adult, id, media_type, date,popularity, original_language,
                           original_title, poster, vote_average}) => {
    return <div className={classes.container}>
        <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'}/>
        <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <span className={classes.title}>{title}</span>
        <span className={classes.subtitle}>{media_type === 'tv' ? "TV series" : "Movie" }
            <span>{date}</span>
        </span>


    </div>;
}

export default SingleContent;
