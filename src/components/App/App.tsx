import { useState } from "react"
import { useFetchNotes } from "../../hooks/useFetchNotes"
import SearchBox from "../SearchBox/SearchBox"
import NoteList from "../NoteList/NoteList"
import Pagination from "../Pagination/Pagination"
import Modal from "../Modal/Modal"
import NoteForm from "../NoteForm/NoteForm"
import css from "./App.module.css"

export default function App() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)

  const { data, isFetching, isError } = useFetchNotes(page, search)

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox onSearch={setSearch} />
        {data && data.totalPages > 1 && (
          <Pagination
            pageCount={data.totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
        <button className={css.button} onClick={() => setModalOpen(true)}>
          Create note +
        </button>
      </header>

      {isFetching && <p>⏳ Завантаження...</p>}
      {isError && <p style={{ color: "red" }}>❌ Помилка завантаження</p>}

      {data && data.notes.length > 0 ? (
        <NoteList notes={data.notes} />
      ) : (
        <p>Немає нотаток 😢</p>
      )}

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <NoteForm onClose={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  )
}
