import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {requestMovies, setCurrentPage} from "../../../store/reducers/movies-reducer.js";
import Movies from "./Movies.jsx";

const MoviesContainer = (props) => {

    const onMoviePageChange= (pageNumber)=>{
        props.setCurrentPage(pageNumber)
        window.scroll(0,0)
    }

    useEffect(()=>{
        props.requestMovies(props.currentPage)
    },[props.currentPage])

  return (
    <div>
        <Movies movies ={props.movies}
                onMoviePageChange={onMoviePageChange}
                moviesPagesTotalCount={props.moviesPagesTotalCount}
        />
    </div>
  )
}

const mapStateToProps =(state) =>{
    return {
        movies:state.movies.movies,
        currentPage: state.movies.currentPage,
        moviesPagesTotalCount:state.movies.moviesPagesTotalCount
    }
}

export default connect(mapStateToProps,{requestMovies,setCurrentPage})(MoviesContainer)