import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/Components/home/Components/HomeProductData";

const slice = createSlice({
    name:"cart",
    initialState:{
        products:[],
    },
    reducers:{
        addCart:(state,action)=>{
            const isExist = state.products.find(
                (product)=> product.id === action.payload.id);
                if(!isExist){
                    state.products.push(action.payload);
                }
        }
    }

});
    
export const {addCart} =slice.actions;
export default slice.reducer;