import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    viewEditTagsModal: boolean,
    viewAddTagsModal: boolean,
    viewCreateNoteModal: boolean,
    viewFiltersModal: boolean
}

const initialState: ModalState = {
    viewEditTagsModal: false,
    viewAddTagsModal: false,
    viewCreateNoteModal: false,
    viewFiltersModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
    
    }
})

export default modalSlice.reducer;