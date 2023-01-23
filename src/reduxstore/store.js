import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import amountReducer from './amountSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        total:amountReducer
    },
})