import { createSlice } from "@reduxjs/toolkit";


const initialState={
  data:null,
  plan:null,
  weather:null
}

export const slice=createSlice({
  name:'sliceData',
  initialState,
  reducers:{
      setData:(state,action)=>{
        state.data=action.payload
      },
      setWeather:(state,action)=>{
        state.weather=action.payload
      },
      setPlan:(state,action)=>{
        state.plan=action.payload
    }
  }
})

export const {setData,setWeather,setPlan}=slice.actions

export default slice.reducer