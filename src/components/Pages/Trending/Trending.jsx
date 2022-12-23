import React from "react";
import classes from "./Trending.module.css";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import PaginationRounded from "../../Pagination/Pagination.jsx";

const Trending = ({trendingMovies,trendingMoviesPagesTotalCount,onTrendingPageChange}) => {



    return <div >
        <div className={classes.pageTitle}>Trending</div>
        <div className={classes.trending} >{trendingMovies && trendingMovies.map(t => <SingleContent key={t.id} id={t.id}
                                                                     adult={t.adult} backdrop_path={t.backdrop_path}
                                                                     title={t.title || t.name} media_type={t.media_type}
                                                                     original_language={t.original_language}
                                                                     original_title={t.original_title || t.original_name}
                                                                     popularity={t.popularity} poster={t.poster_path}
                                                                     date={t.release_date || t.first_air_date}
                                                                     vote_average={t.vote_average}
                                                                     vote_count={t.vote_count}

        />)}</div>
    <PaginationRounded pagesCount={trendingMoviesPagesTotalCount}
                       onPageChange={onTrendingPageChange}
    />
    </div>;
}

export default Trending;
