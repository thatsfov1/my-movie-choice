import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const getTrending = async (page = 1) =>{
   const {data} = await instance.get(`trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`)
    return data
}

export const getMovies = async (page = 1,genreforURL:number,sort_by ='popularity.desc') =>{
    const {data} = await instance.get(`discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    return data
}

export const getRecommendation = async (media_type:string,id:string) => {
    const {data} = await instance.get(`${media_type}/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
    return data.results
}

export const getCredits = async (media_type:string,id:string) => {
    const {data} = await instance.get(`${media_type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    return data
}
export const getGenres = async (type:string) => {
    const {data} = await instance.get(`/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    return data.genres
}

export const getSeries = async (page = 1,genreforURL:number,sort_by ='popularity.desc') =>{
    const {data} = await instance.get(`discover/tv?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&sort_by=${sort_by}&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    return data
}

export const toSearch = async(type:number,searchQuery:string,page=1 ) => {
    const {data} = await instance.get(`search/${type ? "tv" : "movie"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`)
    return data
}

export const getSingleItem = async (media_type:string,id:string) =>{
    const data = await instance.get(`${media_type}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    return data.data
}


export const getItemLink = async (media_type:string,id:string) => {
    const {data} = await instance.get(`${media_type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
    return data.results[0]?.key
}
