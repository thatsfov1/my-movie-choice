import React from 'react'
import classes from "../Trending/Trending.module.css";

const Select = ({setSortBy,setCurrentPage,dateValue,revenue}) => {


    const handleSelectChange =(selectValue) =>{
        setSortBy(selectValue)
        setCurrentPage(1)
    }

  return (
    <div>
        <div className={classes.sort}>
            <span className={classes.sort_text}>Sort by</span>
            <select onChange={e => handleSelectChange(e.target.value)} className={classes.select}>
                <option value='popularity.desc' >Most Popular</option>
                <option value={dateValue}>Latest</option>
                <option value='vote_average.desc'>Biggest rating</option>
                <option value='vote_count.desc'>Most users rating</option>
                {revenue && <option value='revenue.desc'>Most profitable</option>}
            </select>
        </div>
    </div>
  )
}

export default Select