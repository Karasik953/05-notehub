import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import type { fetchNote } from "../../types/note";
//функція для запиту нотаток через react query 
export const useFetchNotes = (searchQuery:string, page:number) => {
    return useQuery<fetchNote>({
        queryKey: ['notes', searchQuery, page],
        queryFn: () => fetchNotes(searchQuery, page),
    })
}