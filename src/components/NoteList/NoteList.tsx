// для відображення нотаток
import css from "./NoteList.module.css";
import type { Note } from "../../types/note";
import { deleteNote } from "../../services/noteService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface NoteListProps {
  notes: Note[];
}

// перебирає та рендерить нотатки в App
export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
//функція для видалення нотаток ого курто
  const deleteNoteMutation = useMutation({
    mutationFn: (id: number) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>

            {/* кнопка де використовується функція для видалення нотатки вау крут мега чотко */}
            <button
              className={css.button}
              onClick={() => deleteNoteMutation.mutate(note.id)}
              disabled={deleteNoteMutation.isPending}
            >
              {deleteNoteMutation.isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
