import { createSlice } from '@reduxjs/toolkit'
import { _ } from "lodash";
import {getHomePageData  } from "./Home.actions";

const HomeSlice = createSlice({
  name: 'Home',
  initialState: {
    homeData: [],
    isLoading: false
  },
  reducers: {
    updateState: (state, action) => {
      let dataHome = _.map(state.homeData,(value,index) => {
        if(value.key === action.payload.GPIO){
          value.Status = action.payload.Status
          return value
        } else return value
      }) 
      state.homeData = dataHome
    }
  },
  extraReducers: {
    [getHomePageData.pending]: (state, action) => {
      state.isLoading = true
    },
    [getHomePageData.fulfilled]: (state, action) => {
      state.isLoading = false
      state.homeData = action.payload
    }
  }
})

export const { actions, reducer } = HomeSlice

export default reducer
