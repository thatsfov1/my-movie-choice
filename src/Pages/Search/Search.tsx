import React, {useState} from "react";
import PaginationRounded from "../PagesItems/Pagination.tsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent";
import SearchField from "../PagesItems/SearchField.tsx";
import {useQuery} from "@tanstack/react-query";
import {toSearch} from "../../api/api";
import './Search.module.css'
import {useDebounce} from "../../hooks/useDebounce.ts";
import Preloader from "../../components/Preloader/Preloader";

const Search = () => {


    const [page, setPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [type, setType] = useState<number>(0);
    const debouncedQuery = useDebounce(searchQuery)

    const onSearchPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        window.scroll(0,0)
    }

    const {data:searchResults, isLoading} = useQuery({
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
        {isLoading && <Preloader/>}
    </div>;

}

export default Search;
