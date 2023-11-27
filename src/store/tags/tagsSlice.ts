import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const initialState = {
    tagsList: [
        { tag: "coding", id: v4() },
        { tag: "exercise", id: v4() },
        { tag: "quotes", id: v4() }
    ]
}

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
      
    }
})

export default tagsSlice.reducer;