import { createSlice } from "@reduxjs/toolkit"


const initialState = []

const cartSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        popupOpen(state, action) {
            state.push(action.payload)
        },
        popupClose(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {popupOpen, popupClose } = cartSlice.actions;

export default cartSlice.reducer;