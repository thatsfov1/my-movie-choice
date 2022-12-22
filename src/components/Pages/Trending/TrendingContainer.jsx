import React, {useEffect} from 'react'
import Trending from "./Trending.jsx";
import {connect} from "react-redux";
import {requestTrending} from "../../../store/reducers/trending-reducer.js";

const TrendingContainer = (props) => {

    useEffect(() => {
        props.requestTrending(props.currentPage)
    }, [props.currentPage])

    return (
        <div>
            <Trending
                trendingMovies={props.trendingMovies}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trendingMovies: state.trending.trendingMovies,
        trendingMoviesTotalCount: state.trending.trendingMoviesTotalCount,
        currentPage:state.trending.currentPage
    }
}


export default connect(mapStateToProps, {requestTrending})(TrendingContainer);