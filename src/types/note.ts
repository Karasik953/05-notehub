//ітерфейс інформації про нотатку
export interface Note {
    id:number
    title: string;
    content:string;
    tag:string;
}
//інтерфейс що робить інформацію масивом
export interface fetchNote {
    notes: Note[]
}