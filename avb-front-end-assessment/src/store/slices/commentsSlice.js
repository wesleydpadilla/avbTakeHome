import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//fetches some data from the typicode api, the structure made it complicated to post a single comment so in the interest of time
//I opted for the mock data in the api but left this in to show the data was fetched

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    ).then(res => res.json())
  }
)

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getComments.pending]: state => {
      state.status = "loading"
    },
    [getComments.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = "success"
    },
    [getComments.rejected]: state => {
      state.status = "failed"
    }
  }
})

export default commentsSlice.reducer
