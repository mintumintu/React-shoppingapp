import { createSlice } from "@reduxjs/toolkit";


const initialState = [

]

const cartproductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct(state,action){
            state.push(action.payload)
        }
    }
})

export const {addProduct} = cartproductSlice.actions
export default cartproductSlice.reducer