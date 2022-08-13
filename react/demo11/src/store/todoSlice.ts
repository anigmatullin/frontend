import { createSlice } from "@reduxjs/toolkit";
import { Task } from "./types";

const initialState: Task[] = [];

const slice = createSlice({
    name: "task",

    initialState,

    reducers: {

        add: (state, action) => {
            state.push(action.payload);
        },

        remove: (state, action) => {
            const id = action.payload.id;
            return state.filter(item => item.id !== id);
        }

    },

});

export  const {add, remove} = slice.actions;
export default slice.reducer;
