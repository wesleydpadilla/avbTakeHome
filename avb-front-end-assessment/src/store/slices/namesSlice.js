import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//fetches some data from the typicode api, the structure made it complicated to post a single comment so in the interest of time
//I opted for the mock data in the api but left this in to show the data was fetched

export const getUser = createAsyncThunk("user/getUser", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
    res.json()
  )
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getUser.pending]: state => {
      state.status = "loading"
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = "success"
    },
    [getUser.rejected]: state => {
      state.status = "failed"
    }
  }
})

export default userSlice.reducer
