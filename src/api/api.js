import axios from "axios";

const API_KEY = '05dae2166e20d1c9b5c8467daa61d168'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const trendingAPI={
    getTrending(currentPage = 1){
        return instance.get(`trending/all/day?api_key=${API_KEY}&page=${currentPage}`)
    }
}

export const moviesAPI={
    getMovies(currentPage = 1,genreforURL){
        return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`)
    },
}

export const genresAPI  ={
    getGenres(type){
        return instance.get(`/genre/${type}/list?api_key=${API_KEY}&language=en-US`)
    }
}

export const seriesAPI ={
    getSeries(currentPage = 1,genreforURL){
        return instance.get(`discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`)
    },
}

export const searchAPI = {
    toSearch(type,searchText,currentPage = 1){
        return instance.get(`search/${type ? "tv" : "movie"}?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${currentPage}&include_adult=false`)
    }
}
