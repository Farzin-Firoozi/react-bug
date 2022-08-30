import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import userReducer from "./reducers/user"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: getDefaultMiddleware({}),
})

export default store
