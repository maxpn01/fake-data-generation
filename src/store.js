import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./slices/regionSlice";
import errorAmountReducer from "./slices/errorsSlice";
import seedReducer from "./slices/seedSlice";
import usersReducer from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        region: regionReducer,
        errorAmount: errorAmountReducer,
        seed: seedReducer,
        users: usersReducer
    },
})