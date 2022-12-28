import React, {useEffect, useState} from 'react'
import Trending from "./Trending.jsx";
import {connect} from "react-redux";
import {requestTrending} from "../../../store/reducers/trending-reducer.js";

const TrendingContainer = (props) => {

    const [currentPage,setCurrentPage] = useState(1)

   const onTrendingPageChange= (pageNumber)=>{
       setCurrentPage(pageNumber)
       window.scroll(0,0)
   }

    useEffect(() => {
        props.requestTrending(currentPage)
    }, [currentPage])

    return (
        <div>
            <Trending
                trendingMovies={props.trendingMovies}
                trendingMoviesPagesTotalCount={props.trendingMoviesPagesTotalCount}
                onTrendingPageChange={onTrendingPageChange}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.trending.trendingMovies,
        trendingMoviesPagesTotalCount: state.trending.trendingMoviesPagesTotalCount,
    }
}


export default connect(mapStateToProps, {requestTrending})(TrendingContainer);