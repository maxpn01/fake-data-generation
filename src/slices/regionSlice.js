import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "USA",
}

export const regionSlice = createSlice({
    name: "region",
    initialState,
    reducers: {
        updateRegion: (state, action) => {
            state.value = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateRegion } = regionSlice.actions;

export default regionSlice.reducer;