import { createSlice , createAsycnTunk } from "@reduxjs/toolkit";

const fetchDetail = createAsycnTunk('coins/Detail', async(id)=>{
    const response = await fetch( `https://api.coinstats.app/public/v1/coins/${id}`);
    const detail = await response.json();
    const {coin} = detail;
    return coin;
})
const initialState[];
const detailSlice = createSlice({
    name:'Detail',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(fetchDetail.fullfilled,(state,action)=>action.payload);
    }
})
 export default detailSlice.reducer;