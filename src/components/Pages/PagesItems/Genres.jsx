import React, {useState} from 'react'
import {Chip} from "@mui/material";

const Genres = ({genres,setGenres,setCurrentPage,setSelectedGenre,selectedGenre}) => {


    const handleAdd = (genre)=>{
        setSelectedGenre([...selectedGenre, genre])
        setGenres(genres.filter(g=> g.id !== genre.id))
        setCurrentPage(1)
    }

    const handleRemove = (genre)=>{
        setSelectedGenre(
            selectedGenre.filter(selected=> selected.id !== genre.id)
        )
        setGenres([...genres, genre])
        setCurrentPage(1)
    }

  return (
    <div style={{
        padding:"6px"
    }}>
        { selectedGenre.map(genre=> <Chip
            key={genre.id}
            label={genre.name}
            style={{margin:2}}
            clickable
            color="primary"
            onDelete={()=> handleRemove(genre)}
        />)}
        {genres.map(genre=> <Chip
            key={genre.id}
            label={genre.name}
            style={{margin:2}}
            clickable
            onClick={()=> handleAdd(genre)}
        />)}

    </div>
  )
}

export default Genres