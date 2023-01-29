import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const trendingAPI={
    getTrending(currentPage = 1){
        return instance.get(`trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`)
    }
}

export const moviesAPI={
    getMovies(currentPage = 1,genreforURL,sort_by ='popularity.desc'){
        return instance.get(`discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`)
    },
    getRecommendation(media_type,id){
        return instance.get(`${media_type}/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
    } ,
    getCredits(media_type,id){
        return instance.get(`${media_type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    }
}

export const genresAPI  ={
    getGenres(type){
        return instance.get(`/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    }
}

export const seriesAPI ={
    getSeries(currentPage = 1,genreforURL,sort_by ='popularity.desc'){
        return instance.get(`discover/tv?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreforURL}`)
    },
}

export const searchAPI = {
    toSearch(type,searchText,currentPage = 1){
        return instance.get(`search/${type ? "tv" : "movie"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${searchText}&page=${currentPage}&include_adult=false`)
    }
}

export const modalAPI = {
    getSingleContent(media_type,id){
        return instance.get(`${media_type}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    },
    getSingleContentLink(media_type,id){
        return instance.get(`${media_type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    }
}