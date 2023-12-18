import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "0",
}

export const errorAmountSlice = createSlice({
    name: "errorAmount",
    initialState,
    reducers: {
        updateErrorAmount: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { updateErrorAmount } = errorAmountSlice.actions;

export default errorAmountSlice.reducer;