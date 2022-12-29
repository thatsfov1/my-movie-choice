import React from "react";
import classes from "../Trending/Trending.module.css";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import Genres from "../PagesItems/Genres.jsx";
import Select from "../PagesItems/Select.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";



const Movies = ({onMoviePageChange,movies,moviesPagesTotalCount,
                    genres,setGenres,setCurrentPage,setSelectedGenre,
                    selectedGenre,setSortBy}) => {

    return <div>
        <div className={classes.pageTitle}>Movies</div>
        <Genres genres={genres}
                setCurrentPage={setCurrentPage}
                setGenres={setGenres}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
        />

        <Select setSortBy={setSortBy} setCurrentPage={setCurrentPage} dateValue="release_date.desc" revenue/>

        <MapToSingleContent content={movies} media_type={"movie"}/>

        <PaginationRounded  pagesCount={moviesPagesTotalCount}
                           onPageChange={onMoviePageChange}/>
    </div>;
}

export default Movies;
