import React, {useState} from "react";
import classes from "../Trending/Trending.module.css";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import Genres from "../PagesItems/Genres.jsx";
import Select from "../PagesItems/Select.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";
import {useQuery} from "@tanstack/react-query";
import {getGenres, getMovies} from "../../api/api.js";
import useGenre from "../../hooks/useGenre.js";



const Movies = () => {

    const [page, setPage] = useState(1);
    const [sort_by,setSortBy] = useState('popularity.desc')
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])

    const genreforURL = useGenre(selectedGenres)

    const onPageChange = (pageNumber) => {
        setPage(pageNumber)
        window.scroll(0, 0)
    }

    const {data:movies} = useQuery({
        queryKey:['movies',page,genreforURL,sort_by ],
        queryFn:() => getMovies(page,genreforURL,sort_by ),

    })
    const {isLoading:areGenresLoading, data:genresData} = useQuery({
        queryKey:['genres',page,genreforURL,sort_by ],
        queryFn:() => getGenres('movie'),
        onSuccess: (genres) => {
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

        <MapToSingleContent content={movies?.results} media_type={"movie"}/>

        <PaginationRounded  pagesCount={movies?.total_pages}
                           onPageChange={onPageChange}/>
    </div>;
}

export default Movies;
