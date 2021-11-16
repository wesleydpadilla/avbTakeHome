import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

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
