import React from "react";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";
import SearchField from "../PagesItems/SearchField.jsx";

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
        <SearchField type={type} setSearchText={setSearchText} setType={setType} setCurrentPage={setCurrentPage}/>
            {searchText && searchResults && <MapToSingleContent content={searchResults} media_type={type ? 'tv' : 'movie'}/> }
        {searchText && <PaginationRounded pagesCount={resultsPagesTotalCount}
                                          onPageChange={onSearchPageChange}/>}
        {searchText && !searchResults && (type ? <h2> No Series Found</h2> : <h2>No Movies Found</h2>)}
        {!searchText && (type ? <h2>Find the TV Series</h2> : <h2>Find the Movie</h2>)}
    </div>;

}

export default Search;
