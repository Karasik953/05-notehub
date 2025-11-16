import css from './App.module.css'
import NoteList from '../NoteList/NoteList'
import { useFetchNotes } from '../hooks/useFetchNotes'


export default function App() {
    const {data: notes} = useFetchNotes("")
    return(
    <div className={css.app}>
	    <header className={css.toolbar}>
		    {/* Компонент SearchBox */}
		    {/* Пагінація */}
		    {/* Кнопка створення нотатки */}
        </header>

        
        {/* якщо є нотатки то рендерь їх */}
        {notes && notes.length > 0 && (
        <NoteList notes={notes} />
      )}
    </div>
    )
}