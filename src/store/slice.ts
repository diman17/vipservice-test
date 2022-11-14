import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TicketsState = {
    from: string;
    to: string;
    there: string;
    back: string;
};

const initialState: TicketsState = {
    from: "",
    to: "",
    there: "",
    back: "",
};

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        setStateFrom: (state, action: PayloadAction<string>) => {
            state.from = action.payload;
        },
        setStateTo: (state, action: PayloadAction<string>) => {
            state.to = action.payload;
        },
        setStateThere: (state, action: PayloadAction<string>) => {
            state.there = action.payload;
        },
        setStateBack: (state, action: PayloadAction<string>) => {
            state.back = action.payload;
        },
    },
});

export const { setStateFrom, setStateTo, setStateThere, setStateBack } = ticketsSlice.actions;
export default ticketsSlice.reducer;
