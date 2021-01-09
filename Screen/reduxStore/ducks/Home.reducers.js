import { createSlice } from '@reduxjs/toolkit'
import { _ } from "lodash";
import {getHomePageData, submitUpdate, updateState  } from "./Home.actions";

const HomeSlice = createSlice({
  name: 'Home',
  initialState: {
    homeData: [],
    isLoading: false,
    isRegistraionSuccess: false
  },
  reducers: {
    // updateState: (state, action) => {
    //   let dataHome = _.map(state.homeData,(value,index) => {
    //     if(value.key === action.payload.GPIO){
    //       value.Status = action.payload.Status
    //       return value
    //     } else return value
    //   }) 
    //   state.homeData = dataHome
    // },
    updateName: (state, action) => {
      let dataHome = _.map(state.homeData,(value,index) => {
        if(value.key === action.payload.GPIO){
          value.Name = action.payload.Name
          return value
        } else return value
      }) 
      state.homeData = dataHome
    }
  },
  extraReducers: {
    [getHomePageData.pending]: (state, action) => {
      state.isRegistraionSuccess = false
      state.isLoading = true
    },
    [getHomePageData.fulfilled]: (state, action) => {
      state.isRegistraionSuccess = false
      state.isLoading = false
      state.homeData = action.payload
    },
    [submitUpdate.pending]: (state, action) => {
      state.isLoading = true,
      state.isRegistraionSuccess = false
    },
    [submitUpdate.fulfilled]: (state, action) => {
      state.isLoading = false,
      state.isRegistraionSuccess = true
    },
    [updateState.fulfilled]: (state, action) => {
      if (action != null) {
        let dataHome = _.map(state.homeData,(value,index) => {
          if(value.key === action.payload.GPIO){
            value.Status = action.payload.Status
            return value
          } else return value
        }) 
        state.homeData = dataHome
      }
    }
  }
})

export const { actions, reducer } = HomeSlice

export default reducer
