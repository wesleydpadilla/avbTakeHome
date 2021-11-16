import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

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
