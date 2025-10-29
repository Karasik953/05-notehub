export interface Note {
  id: string
  title: string
  content: string
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo"
  createdAt: string
  updatedAt: string
}

export interface FetchNotesResponse {
  notes: Note[]
  page: number
  perPage: number
  totalPages: number
  totalNotes: number
}

export interface CreateNoteDto {
  title: string
  content: string
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo"
}
