import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {requestResults} from "../../../store/reducers/search-reducer.js";
import Search from "./Search.jsx";

const SearchContainer = (props) => {
    const [type,setType ] = useState(0)
    const [searchText,setSearchText] = useState('')
    const [currentPage,setCurrentPage] = useState(1)

    const onSearchPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber)
        window.scroll(0,0)
    }

    useEffect(()=>{
        props.requestResults(type,searchText,currentPage)
    },[type,searchText,currentPage])

  return (
    <div>
      <Search searchResults={props.searchResults}
              resultsPagesTotalCount={props.resultsPagesTotalCount}
              type={type}
              setType={setType}
              setSearchText={setSearchText}
              setCurrentPage={setCurrentPage}
              onSearchPageChange={onSearchPageChange}
              searchText={searchText}
      />
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        searchResults: state.search.searchResults,
        resultsPagesTotalCount:state.search.resultsPagesTotalCount
    }
}

export default connect(mapStateToProps,{requestResults})(SearchContainer)