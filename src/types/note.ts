//ітерфейс інформації про нотатку
export interface Note {
    id:number
    title: string;
    content:string;
    tag:string;
}
//інтерфейс що робить інформацію масивом
//також типізація для пагінації
export interface fetchNote {
    notes: Note[]
    page:number
    perPage:number
    totalPages:number
}