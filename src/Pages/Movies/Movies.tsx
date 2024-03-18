import React, {useState} from "react";
import classes from "../../styles/Trending.module.scss";
import PaginationRounded from "../PagesItems/Pagination";
import Genres from "../PagesItems/Genres";
import Select from "../PagesItems/Select";
import MapToSingleContent from "../PagesItems/MapToSingleContent";
import {useQuery} from "@tanstack/react-query";
import {getGenres, getMovies} from "../../api/api";
import useGenre from "../../hooks/useGenre";
import {Genre} from "../../models/models";
import Preloader from "../../components/Preloader/Preloader";
import ErrorPage from "../ErrorPage/ErrorPage";
import usePageScroll from "../../hooks/usePageScroll";



const Movies = () => {

    const [sort_by,setSortBy] = useState<string>('popularity.desc')
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
    const [genres, setGenres] = useState<Genre[]>([])
    const genreforURL = useGenre(selectedGenres)
    const { page, onPageChange, setPage } = usePageScroll();

    const {data:movies, isLoading:isMoviesLoading, isError} = useQuery({
        queryKey:['movies',page,genreforURL,sort_by ],
        queryFn:() => getMovies(page,genreforURL,sort_by ),

    })
    const { isLoading:isGenresLoading} = useQuery({
        queryKey:['genres',page,genreforURL,sort_by ],
        queryFn:() => getGenres('movie'),
        onSuccess: (genres:Genre[]) => {
            setGenres(genres)
        }
    })


    return <div>
        <div className={classes.pageTitle}>Movies</div>
        <Genres genres={genres}
                 setPage={setPage}
                 setGenres={setGenres}
                 selectedGenres={selectedGenres}
                 setSelectedGenres={setSelectedGenres}/>
        <Select setSortBy={setSortBy} setPage={setPage} dateValue="release_date.desc" revenue/>
        {isMoviesLoading || isGenresLoading && <Preloader/>}
        {isError && <ErrorPage/>}
        <MapToSingleContent content={movies?.results} media_type={"movie"}/>

        <PaginationRounded  pagesCount={movies?.total_pages}
                           onPageChange={onPageChange}/>
    </div>;
}

export default Movies;
