import React, {useEffect, useState} from "react";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";
import SearchField from "../PagesItems/SearchField.jsx";
import classes from './Search.module.css'
import {useQuery} from "@tanstack/react-query";
import {toSearch} from "../../api/api.js";
import {useDebounce} from "../../hooks/useDebounce.js";

const Search = () => {


    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [type, setType] = useState(0);
    const debouncedQuery = useDebounce(searchQuery)

    const onSearchPageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }


    const {data:searchResults} = useQuery({
        queryKey:['search',type,debouncedQuery,page],
        queryFn:() => toSearch(type,debouncedQuery,page)
    })

    return <div>
        <SearchField type={type} setSearchQuery={setSearchQuery} setType={setType} setPage={setPage}/>
        {searchQuery && searchResults &&
            <MapToSingleContent content={searchResults?.results} media_type={type ? 'tv' : 'movie'}/>
        }
        {searchQuery && <PaginationRounded pagesCount={searchResults?.total_pages}
                                          onPageChange={onSearchPageChange}/>}
        {searchQuery && !searchResults && (type ? <h2> No Series Found</h2> : <h2>No Movies Found</h2>)}
        {!searchQuery && (type ? <h2>Find the TV Series</h2> : <h2>Find the Movie</h2>)}
    </div>;

}

export default Search;
