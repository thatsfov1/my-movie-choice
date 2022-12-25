import React, {useState} from "react";
import PaginationRounded from "../../Pagination/Pagination.jsx";
import classes from "../Trending/Trending.module.css";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import {Button, Tab, Tabs, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({
                    searchResults,
                    resultsPagesTotalCount,
                    type,
                    setType,
                    setSearchText,
                    setCurrentPage,
                    onSearchPageChange,
                    searchText
                }) => {
    return <div>
        <div style={{display: "flex", margin: "15px 0"}}>
            <TextField
                variant="outlined"
                label="Search"
                style={{flex: 1}}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="contained"
                    style={{marginLeft: 15}}>
                <SearchIcon/>
            </Button>
        </div>
        <Tabs value={type} textColor='primary'
              indicatorColor='primary'
              onChange={(event, newValue) => {
                  setType(newValue)
                  setCurrentPage(1)
              }}
        >
            <Tab style={{width: '50%'}} label="Movies"/>
            <Tab style={{width: '50%'}} label="Series"/>
        </Tabs>
        <div className={classes.trending}>{searchText && searchResults && searchResults.map(t => <SingleContent
            key={t.id} id={t.id}
            adult={t.adult} backdrop_path={t.backdrop_path}
            title={t.title || t.name} media_type={type ? 'tv' : 'movie'}
            original_language={t.original_language}
            original_title={t.original_title || t.original_name}
            popularity={t.popularity} poster={t.poster_path}
            date={t.release_date || t.first_air_date}
            vote_average={t.vote_average}
            vote_count={t.vote_count}

        />)}
        </div>
        {searchText && <PaginationRounded pagesCount={resultsPagesTotalCount}
                                          onPageChange={onSearchPageChange}/>}
        {searchText && !searchResults && (type ? <h2> No Series Found</h2> : <h2>No Movies Found</h2>)}
        {!searchText && (type ? <h2>Find the TV Series</h2> : <h2>Find the Movie</h2>)}
    </div>;

}

export default Search;
