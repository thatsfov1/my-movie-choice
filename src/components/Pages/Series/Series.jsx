import React from "react";
import classes from "../Trending/Trending.module.css";
import Genres from "../Movies/Genres.jsx";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import PaginationRounded from "../../Pagination/Pagination.jsx";

const Series = ({genres,setCurrentPage,selectedGenre,setSelectedGenre,setGenres,seriesPagesTotalCount,onSeriesPageChange,series}) => {
    return <div>
        <div className={classes.pageTitle}>Series</div>
        <Genres genres={genres}
                setCurrentPage={setCurrentPage}
                setGenres={setGenres}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
        />
        <div className={classes.trending} >{series && series.map(t => <SingleContent key={t.id} id={t.id}
                                                                                     adult={t.adult} backdrop_path={t.backdrop_path}
                                                                                     title={t.title} media_type={"tv"}
                                                                                     original_language={t.original_language}
                                                                                     original_title={t.original_name}
                                                                                     popularity={t.popularity} poster={t.poster_path}
                                                                                     date={t.first_air_date}
                                                                                     vote_average={t.vote_average}
                                                                                     vote_count={t.vote_count}

        />)}</div>
        <PaginationRounded  pagesCount={seriesPagesTotalCount}
                            onPageChange={onSeriesPageChange}/>
    </div>;
}

export default Series;
