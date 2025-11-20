import axios from "axios";
import type { Note } from "../types/note"
import type { fetchNote } from "../types/note"

//функція для пошуку нотатки + пагінація
export const fetchNotes = async (
  searchPost:string,
  page:number,
  perPage:number=12,

):Promise<fetchNote> => {
    const res = await axios.get<fetchNote>(
        'https://notehub-public.goit.study/api/notes',
        {
         params:{
            search:searchPost,
            page,
            perPage
         },
         headers: {
                Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
        }
        }
    )
    console.log("API response:", res.data);
    return res.data
}
//функція для створення нотатки
export const createNote = async (noteData:Omit<Note, "id">) =>{
    const res = await axios.post(
        'https://notehub-public.goit.study/api/notes',
        noteData,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
            }
        }
    )
    return res.data
}
//функція для видалення нотатки
export const deleteNote = async (id: number) => {
  await axios.delete(
    `https://notehub-public.goit.study/api/notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      }
    }
  );
};
