import { combineReducers } from "@reduxjs/toolkit"

import viewReducer, { name as viewName } from "store/slices/view"
import commentsReducer from "./commentsSlice"
import userReducer from "./namesSlice"

const rootReducer = combineReducers({
  [viewName]: viewReducer,
  comments: commentsReducer,
  user: userReducer
})

export default rootReducer
