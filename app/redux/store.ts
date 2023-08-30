import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'

const rootReducer = {
  user: userReducer.reducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store