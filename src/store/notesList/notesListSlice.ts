import { createSlice } from "@reduxjs/toolkit";
import notes from "../../notesData";
import { Note } from "../../types/note";

interface NoteState {
    mainNotes: Note[],
    archiveNotes: Note[],
    trashNotes: Note[],
    editNote: null | Note
}

const initialState: NoteState = {
    mainNotes: [...notes],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
}

enum noteType {
    mainNotes = 'mainNotes',
    archiveNotes = 'archiveNotes',
    trashNotes = 'trashNotes'
}

const notesListSlice = createSlice({
    name: "notesList",
    initialState,
    reducers: {
       
    }
})

export default notesListSlice.reducer;