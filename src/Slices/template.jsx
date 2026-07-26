import { createSlice } from '@reduxjs/toolkit';

// Retrieve stored template value from localStorage, default to 1 if not found
const storedTemplate = localStorage.getItem('template')
  ? JSON.parse(localStorage.getItem('template'))
  : 1;

const templateSlice = createSlice({
    name: 'resumifyTemp',
    initialState: {
        template: storedTemplate
    },
    reducers: {
        setTemplate(state, action) {
            state.template = action.payload;
            localStorage.setItem('template', JSON.stringify(action.payload)); // Store in localStorage
        }
    }
});

export const { setTemplate } = templateSlice.actions;
export default templateSlice.reducer;
