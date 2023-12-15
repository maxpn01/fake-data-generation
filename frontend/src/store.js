import { configureStore } from '@reduxjs/toolkit'
import regionReducer from "./slices/regionSlice";
import seedReducer from "./slices/seedSlice";

export const store = configureStore({
    reducer: {
        region: regionReducer,
        seed: seedReducer
    },
})