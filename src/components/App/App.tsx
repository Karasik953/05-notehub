import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import { useFetchNotes } from "../hooks/useFetchNotes";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useFetchNotes(searchQuery, currentPage);

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // при новому пошуку повертаємось на 1 сторінку
  };


  return (
    <div className={css.app}>
      <header className={css.toolbar}>
      <SearchBox onSearchChange={handleSearchChange} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <button className={css.button} onClick={openModal}>Create note +</button>
      </header>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading notes</p>}

      {notes.length > 0 && <NoteList notes={notes} />}

    </div>
  );
}
