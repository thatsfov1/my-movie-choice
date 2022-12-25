import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {requestResults} from "../../../store/reducers/search-reducer.js";
import Search from "./Search.jsx";

const SearchContainer = (props) => {

    useEffect(()=>{
        props.requestResults()
    },[])

  return (
    <div>
      <Search searchResults={props.searchResults}
              resultsPagesTotalCount={props.resultsPagesTotalCount}
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