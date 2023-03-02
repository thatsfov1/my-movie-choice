import {Genre} from "../models/models";

const useGenre = (selectedGenres:Genre[]) => {
    if (selectedGenres.length <1) return ""

    const GenreIds = selectedGenres.map(g => g.id)

    // @ts-ignore
    return GenreIds.reduce((acc:number,curr:number) => acc + "," + curr)
}

export default useGenre