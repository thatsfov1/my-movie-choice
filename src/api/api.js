import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const trendingAPI={
    getTrending(currentPage = 1){
        return instance.get(`trending/all/day?api_key=05dae2166e20d1c9b5c8467daa61d168&page=${currentPage}`)
    }
}