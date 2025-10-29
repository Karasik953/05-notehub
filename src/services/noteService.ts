import axios from "axios"
import type { Note, FetchNotesResponse, CreateNoteDto } from "../types/note"

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
})

export const fetchNotes = async (page: number, search: string) => {
  const res = await api.get<FetchNotesResponse>("/notes", {
    params: { page, perPage: 12, search },
  })
  return res.data
}

export const createNote = async (note: CreateNoteDto) => {
  const res = await api.post<Note>("/notes", note)
  return res.data
}

export const deleteNote = async (id: string) => {
  const res = await api.delete<Note>(`/notes/${id}`)
  return res.data
}
