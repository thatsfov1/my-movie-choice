import React, {useEffect, useState} from "react";
import classes from "./Trending.module.css";
import PaginationRounded from "../PagesItems/Pagination.jsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.jsx";
import {useQuery} from "@tanstack/react-query";
import {getTrending} from "../../api/api.js";

const Trending = () => {

    const [page, setPage] = useState(1);

    const {data} = useQuery({
        queryKey:['trending', page],
        queryFn:() => getTrending(page)
    })

   const onPageChange = (pageNum) => {
       setPage(pageNum)
       window.scroll(0,0)
   }

    return <div>
        <div className={classes.pageTitle}>
            Trending
        </div>

        <MapToSingleContent content={data?.results} />

        <PaginationRounded pagesCount={data?.total_pages}
                           onPageChange={onPageChange}
        />
    </div>;
}

export default Trending;
