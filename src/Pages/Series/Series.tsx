import React, {useState} from "react";
import s from "../Trending/Trending.module.css";
import Genres from "../PagesItems/Genres.tsx";
import PaginationRounded from "../PagesItems/Pagination.tsx";
import Select from "../PagesItems/Select.tsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.tsx";
import {useQuery} from "@tanstack/react-query";
import useGenre from "../../hooks/useGenre.ts";
import {getGenres, getSeries} from "../../api/api";
import {Genre} from "../../models/models";


const Series = () => {

    const [page,setPage] = useState<number>(1)
    const [sort_by,setSortBy] = useState<string>('popularity.desc')
    const [selectedGenres,setSelectedGenres] = useState<Genre[]>([])
    const [genres,setGenres] = useState<Genre[]>([])
    const genreforURL = useGenre(selectedGenres)

    const onSeriesPageChange= (event: React.ChangeEvent<unknown>, value: number)=>{
        setPage(value)
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
        <div className={s.pageTitle}>Series</div>
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
