import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
    name:'amount',
    initialState:{
        value:0
    },
    reducers:{
        add:(state,action)=>{
            state.value +=action.payload
        },
        remove:(state,action)=>{
            state.value -=action.payload
        }
    }
})

export const {add,remove}=amountSlice.actions
export default amountSlice.reducer