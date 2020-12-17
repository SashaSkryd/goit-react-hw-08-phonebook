import { createReducer,combineReducers } from "@reduxjs/toolkit"

import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
  filterContact,
  addContactSuccess,
  fetchContactSuccess,
  removeContactSuccess,
} from "../actions/actions.js"

const initialState = {
  user: {
    name: null,
    email: null,
  },
  error: null,
  token: null,
};

const user = createReducer(initialState.user, {
  [loginSuccess]: (_, { payload }) => payload.user,
  [registerSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialState.user,
});

const token = createReducer(initialState.token, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [registerSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => initialState.token,
});

const handleError = () => initialState.error;

const error = createReducer(initialState.error, {
  [loginRequest]: handleError,
  [logoutRequest]: handleError,
  [registerRequest]: handleError,
  [getCurrentUserRequest]: handleError,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [registerError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const createAddContact = (state, actions) => {
  return [...state, { ...actions.payload }]
}

const createRemoveContact = (state, actions) => {
  return state.filter((contact) => {
    return contact.id !== actions.payload
  })
}

const createContactsReducer = createReducer([], {
  [fetchContactSuccess]: (state, actions) => actions.payload,
  [addContactSuccess]: createAddContact,
  [removeContactSuccess]: createRemoveContact,
})

const createFilterReducer = createReducer("", {
  [filterContact]: (state, actions) => actions.payload,
})

export {
    createContactsReducer,
    createFilterReducer,
    user,
    token,
    error
}