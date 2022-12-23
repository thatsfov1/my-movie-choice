import React, {useEffect} from 'react'
import Trending from "./Trending.jsx";
import {connect} from "react-redux";
import {requestTrending, setCurrentPage} from "../../../store/reducers/trending-reducer.js";

const TrendingContainer = (props) => {

   const onTrendingPageChange= (pageNumber)=>{
       props.setCurrentPage(pageNumber)
       window.scroll(0,0)
   }

    useEffect(() => {
        props.requestTrending(props.currentPage)
    }, [props.currentPage])

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
        currentPage:state.trending.currentPage
    }
}


export default connect(mapStateToProps, {requestTrending,setCurrentPage})(TrendingContainer);