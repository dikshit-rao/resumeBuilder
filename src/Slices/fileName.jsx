import { createSlice } from '@reduxjs/toolkit';

const fileNameSlice = createSlice({
    name: 'resumeName',
    initialState: {
        name: "resume"
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        }
    }
});

export const { setName } = fileNameSlice.actions;
export default fileNameSlice.reducer;