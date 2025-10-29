import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createNote } from "../services/noteService"
import { CreateNoteDto } from "../types/note"

export const useAddNote = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (note: CreateNoteDto) => createNote(note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] })
    },
  })
}
