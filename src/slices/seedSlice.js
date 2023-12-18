import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "0",
}

export const seedSlice = createSlice({
    name: "seed",
    initialState,
    reducers: {
        setSeed: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { setSeed } = seedSlice.actions;

export default seedSlice.reducer;