import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {requestGenres, requestMovies, setCurrentPage, setGenres} from "../../../store/reducers/movies-reducer.js";
import Movies from "./Movies.jsx";
import useGenre from "../../../hooks/useGenre.js";


const MoviesContainer = (props) => {

    const type = "movie"

    const [selectedGenre, setSelectedGenre] = useState([])
    const genreforURL = useGenre(selectedGenre)

    const onMoviePageChange = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        window.scroll(0, 0)
    }

    useEffect(() => {
        props.requestMovies(props.currentPage, genreforURL)
    }, [props.currentPage, genreforURL])

    useEffect(() => {
        props.requestGenres(type)
    }, [type])

    return (
        <div>
            <Movies movies={props.movies}
                    onMoviePageChange={onMoviePageChange}
                    moviesPagesTotalCount={props.moviesPagesTotalCount}
                    genres={props.genres}
                    setCurrentPage={props.setCurrentPage}
                    setGenres={props.setGenres}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        currentPage: state.movies.currentPage,
        moviesPagesTotalCount: state.movies.moviesPagesTotalCount,
        genres: state.movies.genres
    }
}

export default connect(mapStateToProps, {requestMovies, setCurrentPage, requestGenres, setGenres})(MoviesContainer)