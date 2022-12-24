import React from "react";
import classes from "../Trending/Trending.module.css";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import PaginationRounded from "../../Pagination/Pagination.jsx";
import Genres from "./Genres.jsx";

const Movies = ({onMoviePageChange,movies,moviesPagesTotalCount,genres,setGenres,setCurrentPage,setSelectedGenre,selectedGenre}) => {
    return <div>
        <div className={classes.pageTitle}>Movies</div>
        <Genres genres={genres}
                setCurrentPage={setCurrentPage}
                setGenres={setGenres}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
        />
        <div className={classes.trending} >{movies && movies.map(t => <SingleContent key={t.id} id={t.id}
                                                                                                     adult={t.adult} backdrop_path={t.backdrop_path}
                                                                                                     title={t.title} media_type={"Movie"}
                                                                                                     original_language={t.original_language}
                                                                                                     original_title={t.original_title}
                                                                                                     popularity={t.popularity} poster={t.poster_path}
                                                                                                     date={t.release_date}
                                                                                                     vote_average={t.vote_average}
                                                                                                     vote_count={t.vote_count}

        />)}</div>
        <PaginationRounded  pagesCount={moviesPagesTotalCount}
                           onPageChange={onMoviePageChange}/>
    </div>;
}

export default Movies;
