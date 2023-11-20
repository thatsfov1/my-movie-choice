import React from 'react'
import classes from "../../styles/Select.module.scss";

type Props = {
    setSortBy: React.Dispatch<React.SetStateAction<string>>
    setPage: React.Dispatch<React.SetStateAction<number>>
    dateValue:string
    revenue?:boolean
}

const Select = ({setSortBy,setPage,dateValue,revenue}:Props) => {


    const handleSelectChange =(e: React.ChangeEvent<HTMLSelectElement>) =>{
        setSortBy(e.target.value)
        setPage(1)
    }

  return (
    <div>
        <div className={classes.sort}>
            <span className={classes.sort_text}>Sort by</span>
            <select onChange={handleSelectChange} className={classes.select}>
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