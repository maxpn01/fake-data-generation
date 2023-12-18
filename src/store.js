import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./slices/regionSlice";
import errorAmountReducer from "./slices/errorsSlice";
import seedReducer from "./slices/seedSlice";

export const store = configureStore({
    reducer: {
        region: regionReducer,
        errorAmount: errorAmountReducer,
        seed: seedReducer
    },
})