import React from "react";
import PaginationRounded from "../../Pagination/Pagination.jsx";
import classes from "../Trending/Trending.module.css";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import {Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({searchResults,resultsPagesTotalCount}) => {
    return <div>


        <div>
            <TextField
            variant="outlined"
            label="Search"
            style={{flex: 1}}/>

            <Button variant="contained"
                    style={{marginLeft: 15}}>
                <SearchIcon/>
            </Button>
        </div>

        <div className={classes.trending} >{searchResults && searchResults.map(t => <SingleContent key={t.id} id={t.id}
                                                                                                     adult={t.adult} backdrop_path={t.backdrop_path}
                                                                                                     title={t.title || t.name} media_type={t.media_type}
                                                                                                     original_language={t.original_language}
                                                                                                     original_title={t.original_title || t.original_name}
                                                                                                     popularity={t.popularity} poster={t.poster_path}
                                                                                                     date={t.release_date || t.first_air_date}
                                                                                                     vote_average={t.vote_average}
                                                                                                     vote_count={t.vote_count}

        />)}</div>

        <PaginationRounded  pagesCount={resultsPagesTotalCount}
                            onPageChange={onSeriesPageChange}/>
    </div>;

}

export default Search;
