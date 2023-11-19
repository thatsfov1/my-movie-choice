import React from 'react'
import s from "../Trending/Trending.module.scss";
import SingleContent from "../../components/SingleContent/SingleContent.tsx";
import {Movie, Series} from "../../models/models";


type Props = {
    content: Movie[] | Series[]
    media_type?:string
}

const MapToSingleContent = ({content,media_type}:Props) => {
  return (
    <div>
        <div className={s.trending} >{content && content.map(c =>
            <SingleContent key={c.id} id={c.id}
                           title={c.title || c.name} media_type={media_type || c.media_type}
                           poster={c.poster_path}
                           date={c.release_date || c.first_air_date}
                           vote_average={c.vote_average}
            />)}
        </div>
    </div>
  )
}
export default MapToSingleContent
