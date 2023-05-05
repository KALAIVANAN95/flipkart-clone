import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice' //this is reducer
import cartSlice from '../slices/cartSlice'  //this is reducer
 
export const store = configureStore({
    reducer:{
        userData:userSlice,
        cartData:cartSlice,
    }
})