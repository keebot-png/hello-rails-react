import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000/api/v1/greetings';

const initialState = {
    created_at: "",
    updated_at: "",
    salutations: "",
    id: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null
}

export const getGreeting = createAsyncThunk('GREETING_FETCH', async() => {
    const response = await axios.get(baseURL);
    const data = await response.json();
    return data;
});

export const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getGreeting.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getGreeting.fulfilled, (state, action) => {
                state.status = 'successful';
                state.salutations = action.payload;
            })
            .addCase(getGreeting.rejected, (state, action) => {
                state.status = 'loading';
                state.error = action.error.message;
            })
    }
});

export const selectGreeting = (state) => state.greeting;
export const selectStatus = (state) => state.greeting.status;
export const selectError = (state) => state.greeting.error;

export default greetingSlice.reducer;