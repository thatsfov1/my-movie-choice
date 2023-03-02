import React from 'react'
import classes from "../Trending/Trending.module.css";
import SingleContent from "../../components/SingleContent/SingleContent.jsx";

const MapToSingleContent = ({content,media_type}) => {
  return (
    <div>
        <div className={classes.trending} >{content && content.map(c =>
            <SingleContent key={c.id} id={c.id}
                           original_language={c.original_language}
                           adult={c.adult} backdrop_path={c.backdrop_path}
                           title={c.title || c.name} media_type={media_type || c.media_type}
                           popularity={c.popularity} poster={c.poster_path}
                           date={c.release_date || c.first_air_date}
                           original_title={c.original_title || c.original_name}
                           vote_count={c.vote_count}
                           vote_average={c.vote_average}

        />)}</div>
    </div>
  )
}
export default MapToSingleContent
