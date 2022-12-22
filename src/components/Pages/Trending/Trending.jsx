import React from "react";
import SingleContent from "../../SingleContent/SingleContent.jsx";

const Trending = ({trendingMovies}) => {



    return <>
        {trendingMovies && trendingMovies.map(t => <SingleContent key={t.id} />)}
    </>;
}

export default Trending;
