// import React from 'react'
import{createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import { axiosInstance } from '../Helper/Helper';
import {createProduct,createList} from "../API/endpoint";
import { edit } from '../API/endpoint';
import { remove } from '../API/endpoint';

const initialState={
    upload_status:'idle',
    product:[],
    list:[{}],
    totalPages:'',
}

export const product_create = createAsyncThunk("create", async (formData) => {
    const res = await axiosInstance.post(createProduct.create, formData);
    const resData = await res?.data;
    return resData;
  });

  export const product_get=createAsyncThunk('list',async(fromData)=>{
    const res=await axiosInstance.post(createList.list,fromData);
    const resData=await res?.data;
    return resData;
  })
  export const product_edit=createAsyncThunk('edit',async(id)=>{
    const res=await axiosInstance.get(`/product/detail/${id}`);
    const resData=await res?.data;
    return resData;
  })
  export const product_update=createAsyncThunk('dit',async(formData)=>{
    const res=await axiosInstance.post(edit.dit,formData);
    let resData=res?.data
    return resData
  })
  export const product_delete=createAsyncThunk('remove',async(formdata)=>{
    const res=await axiosInstance.post(remove.delete,formdata);
    const resData=await res?.data;
    return resData;
  })
  
  export const Cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(product_create.pending, (state,{payload}) => {
            state.upload_status = 'loading';
          })
          .addCase(product_create.fulfilled, (state, {payload}) => {
            state.upload_status = 'succeeded';
          })
          .addCase(product_create.rejected, (state, {payload}) => {
            state.upload_status = 'failed';
          })
          .addCase(product_get.pending,(state,{payload})=>{
            state.upload_status='loading'
          })
          .addCase(product_get.fulfilled,(state,{payload})=>{
            state.upload_status='succed';
            state.list=payload?.data;
            state.totalPages=payload?.totalPages;
          })
          .addCase(product_get.rejected,(state,{payload})=>{
            state.upload_status='failed'
          })
          .addCase(product_edit.pending,(state,{payload})=>{
            state.upload_status='idel'
        })
        .addCase(product_edit.fulfilled,(state,{payload})=>{
          state.upload_status='idel';
          state.product=payload?.data
      })
      .addCase(product_edit.rejected,(state,{payload})=>{
        state.upload_status='idel'
    })
          .addCase(product_update.pending,(state,{payload})=>{
            state.upload_status='idle'
        })
        .addCase(product_update.fulfilled,(state,{payload})=>{
          state.upload_status='idle'
      })
      .addCase(product_update.rejected,(state,{payload})=>{
        state.upload_status='idle'
    })
    .addCase(product_delete.pending,(state,{payload})=>{
        state.delete_status='idel';
      })
      .addCase(product_delete.fulfilled,(state,{payload})=>{
        state.delete_status='idel';
      })
      .addCase(product_delete.rejected,(state,{payload})=>{
        state.delete_status='idel';
      })

      
        }
  })
  export default Cartslice;