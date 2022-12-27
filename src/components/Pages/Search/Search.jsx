import React, {useState} from "react";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import classes from "../Trending/Trending.module.css";
import SingleContent from "../../SingleContent/SingleContent.jsx";
import {Button, createTheme, Tab, Tabs, TextField, ThemeProvider} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";

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

    const theme = createTheme({
        palette:{
            primary:{
                main:'rgba(0,0,0,0.8)'
            }
        }
    })
    return <div>
        <ThemeProvider  theme={theme}>
        <div style={{display: "flex", margin: "15px 0"}}>
            <TextField
                variant="outlined"
                label="Search"
                style={{flex: 1}}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="contained"
                    style={{marginLeft: 15}}
                    color="primary"
            >

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
            {searchText && searchResults && <MapToSingleContent content={searchResults} media_type={type ? 'tv' : 'movie'}/> }
        {searchText && <PaginationRounded pagesCount={resultsPagesTotalCount}
                                          onPageChange={onSearchPageChange}/>}
        {searchText && !searchResults && (type ? <h2> No Series Found</h2> : <h2>No Movies Found</h2>)}
        {!searchText && (type ? <h2>Find the TV Series</h2> : <h2>Find the Movie</h2>)}
        </ThemeProvider>
    </div>;

}

export default Search;
