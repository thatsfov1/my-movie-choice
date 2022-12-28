import React from "react";
import classes from "./Trending.module.css";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";

const Trending = ({trendingMovies, trendingMoviesPagesTotalCount, onTrendingPageChange}) => {
    return <div>
        <div className={classes.pageTitle}>Trending</div>

        <MapToSingleContent content={trendingMovies} />

        <PaginationRounded pagesCount={trendingMoviesPagesTotalCount}
                           onPageChange={onTrendingPageChange}
        />
    </div>;
}

export default Trending;
