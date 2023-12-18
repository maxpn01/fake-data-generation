import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateUsers: (state, action) => {
            state.value = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;