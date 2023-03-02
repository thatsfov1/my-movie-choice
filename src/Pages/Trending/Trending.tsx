import React, {useEffect, useState} from "react";
import s from "./Trending.module.css";
import PaginationRounded from "../PagesItems/Pagination.tsx";
import MapToSingleContent from "../PagesItems/MapToSingleContent.tsx";
import {useQuery} from "@tanstack/react-query";
import {getTrending} from "../../api/api";

const Trending = () => {

    const [page, setPage] = useState<number>(1);

    const {data} = useQuery({
        queryKey:['trending', page],
        queryFn:() => getTrending(page)
    })

   const onPageChange = (event:React.ChangeEvent<unknown>, value:number) => {
       setPage(value)
       window.scroll(0,0)
   }

    return <div>
        <div className={s.pageTitle}>
            Trending
        </div>

        <MapToSingleContent content={data?.results} />

        <PaginationRounded pagesCount={data?.total_pages}
                           onPageChange={onPageChange}
        />
    </div>;
}

export default Trending;
