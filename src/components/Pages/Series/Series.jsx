import React from "react";
import classes from "../Trending/Trending.module.css";
import Genres from "../PagesItems/Genres.jsx";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import Select from "../PagesItems/Select.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";

const Series = ({genres,setCurrentPage,selectedGenre,setSelectedGenre,setGenres,
                    seriesPagesTotalCount,setSortBy,onSeriesPageChange,series}) => {
    return <div>
        <div className={classes.pageTitle}>Series</div>
        <Genres genres={genres}
                setCurrentPage={setCurrentPage}
                setGenres={setGenres}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
        />
        <Select setSortBy={setSortBy} setCurrentPage={setCurrentPage} dateValue="first_air_date.desc"/>
        <MapToSingleContent content={series} media_type={"tv"}/>
        <PaginationRounded  pagesCount={seriesPagesTotalCount}
                            onPageChange={onSeriesPageChange}/>
    </div>;
}

export default Series;
