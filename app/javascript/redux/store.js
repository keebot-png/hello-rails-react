import { configureStore } from "@reduxjs/toolkit";
import { greetingSlice } from "./greeting/greetingSlice";

export const store = configureStore({
    reducer: {
        greeting: greetingSlice.reducer
    }
})