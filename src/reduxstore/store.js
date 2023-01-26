import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import amountReducer from './amountSlice'
import productcartReducer from './cartproductSlice'


export default configureStore({
    reducer:{
        counter:counterReducer,
        total:amountReducer,
        products:productcartReducer,
    }
})