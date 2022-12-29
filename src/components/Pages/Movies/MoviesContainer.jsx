import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {requestGenres, requestMovies, setGenres} from "../../../store/reducers/movies-reducer.js";
import Movies from "./Movies.jsx";
import useGenre from "../../../hooks/useGenre.js";


const MoviesContainer = (props) => {

    const type = "movie"

    const [sort_by,setSortBy] = useState('popularity.desc')
    const [currentPage,setCurrentPage] = useState(1)

    const [selectedGenre, setSelectedGenre] = useState([])
    const genreforURL = useGenre(selectedGenre)

    const onMoviePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scroll(0, 0)
    }

    useEffect(() => {
        props.requestMovies(currentPage, genreforURL,sort_by)
    }, [currentPage, genreforURL,sort_by])

    useEffect(() => {
        props.requestGenres(type)
    }, [type])

    return (
        <div>
            <Movies movies={props.movies}
                    onMoviePageChange={onMoviePageChange}
                    moviesPagesTotalCount={props.moviesPagesTotalCount}
                    genres={props.genres}
                    setCurrentPage={setCurrentPage}
                    setGenres={props.setGenres}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                    setSortBy={setSortBy}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        moviesPagesTotalCount: state.movies.moviesPagesTotalCount,
        genres: state.movies.genres
    }
}

export default connect(mapStateToProps, {requestMovies, requestGenres, setGenres})(MoviesContainer)