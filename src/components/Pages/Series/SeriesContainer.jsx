import React, {useEffect, useState} from 'react'
import Series from "./Series.jsx";
import {requestGenres, requestSeries, setCurrentPage, setGenres} from "../../../store/reducers/series-reducer.js";
import {connect} from "react-redux";
import useGenre from "../../../hooks/useGenre.js";

const SeriesContainer = (props) => {
    const type = "tv"
    const onSeriesPageChange= (pageNumber)=>{
        props.setCurrentPage(pageNumber)
        window.scroll(0,0)
    }

    const [sort_by,setSortBy] = useState('popularity.desc')

    const [selectedGenre,setSelectedGenre] = useState([])

    const genreforURL = useGenre(selectedGenre)

    useEffect(()=>{
        props.requestSeries(props.currentPage,genreforURL,sort_by)
    },[props.currentPage,genreforURL,sort_by])

    useEffect(()=>{
        props.requestGenres(type)
    },[type])

  return (
    <div>
      <Series series={props.series}
              seriesPagesTotalCount={props.seriesPagesTotalCount}
              genres={props.genres}
              onSeriesPageChange={onSeriesPageChange}
              setCurrentPage={setCurrentPage}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              setGenres={props.setGenres}
              setSortBy={setSortBy}
      />
    </div>
  )
}

const mapStateToProps= (state) =>{
    return{
        series:state.series.series,
        currentPage:state.series.currentPage,
        seriesPagesTotalCount:state.series.seriesPagesTotalCount,
        genres:state.series.genres
    }
}


export default connect(mapStateToProps,{requestSeries,requestGenres,setCurrentPage,setGenres})(SeriesContainer)