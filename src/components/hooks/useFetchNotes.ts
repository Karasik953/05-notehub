import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
//функція для запиту нотаток через react query 
export const useFetchNotes = (searchQuery:string) => {
    return useQuery({
        queryKey: ['notes', searchQuery],
        queryFn: () => fetchNotes(searchQuery),
    })
}