import React, {useState} from "react";
import classes from "../Trending/Trending.module.css";
import Genres from "../PagesItems/Genres.jsx";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import Select from "../PagesItems/Select.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";
import {useQuery} from "@tanstack/react-query";
import useGenre from "../../hooks/useGenre.js";
import {getGenres, getSeries} from "../../api/api.js";


const Series = () => {

    const [page,setPage] = useState(1)
    const [sort_by,setSortBy] = useState('popularity.desc')
    const [selectedGenres,setSelectedGenres] = useState([])
    const [genres,setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const onSeriesPageChange= (pageNumber)=>{
        setPage(pageNumber)
        window.scroll(0,0)
    }


    const {data:series} = useQuery({
        queryKey:['series',page,genreforURL,sort_by ],
        queryFn:() => getSeries(page,genreforURL,sort_by )})

    const {isLoading:areGenresLoading, data:genresData} = useQuery({
        queryKey:['genres',page,genreforURL,sort_by ],
        queryFn:() => getGenres('tv'),
        onSuccess: (genresData) => {
            setGenres(genresData)
        }
    })

    return <div>
        <div className={classes.pageTitle}>Series</div>
        <Genres genres={genres}
                setPage={setPage}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
        />
        <Select setSortBy={setSortBy} setPage={setPage} dateValue="first_air_date.desc"/>
        <MapToSingleContent content={series?.results} media_type={"tv"}/>
        <PaginationRounded  pagesCount={series?.total_pages}
                            onPageChange={onSeriesPageChange}/>
    </div>;
}

export default Series;
