import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import { createContactsReducer, createFilterReducer, user, token, error } from "../redux/reducers/reducer.js"
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const authReducer = combineReducers({
  contacts: createContactsReducer,
  filter: createFilterReducer,
  user: user,
  token: token,
  error: error,
})

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = {
  auth: persistedReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
  ],
})

export const persistor = persistStore(store)
