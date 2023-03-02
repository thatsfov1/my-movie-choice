import React from 'react'
import {Chip} from "@mui/material";
import {Genre} from "../../models/models.js";


type Props = {
    genres:Genre[],
    setGenres: React.Dispatch<React.SetStateAction<Genre[]>>
    setPage: React.Dispatch<React.SetStateAction<number>>
    selectedGenres:Genre[],
    setSelectedGenres: React.Dispatch<React.SetStateAction<Genre[]>>
}

const Genres = ({genres,setGenres,setPage,setSelectedGenres,selectedGenres}:Props) => {


    const handleAdd = (genre:Genre)=>{
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre:Genre)=>{
        setSelectedGenres(
            selectedGenres.filter(selected => selected.id !== genre.id)
        )
        setGenres([...genres, genre])
        setPage(1)
    }

    return (
        <div style={{padding:"6px"}}>
            { selectedGenres.map(genre=> <Chip
                key={genre.id}
                label={genre.name}
                style={{margin:2}}
                clickable
                color="primary"
                onDelete={()=> handleRemove(genre)}
            />)}
            {genres && genres.map(genre=> <Chip
                key={genre.id}
                label={genre.name}
                style={{margin:2}}
                clickable
                onClick={()=> handleAdd(genre)}/>)
            }
        </div>
    )
}

export default Genres