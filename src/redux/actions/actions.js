import { createAction } from "@reduxjs/toolkit"

const addContactRequest = createAction("contact/addRequest")
const addContactSuccess = createAction("contact/addSuccess")
const addContactError = createAction("contact/addError")

const fetchContactRequest = createAction("contact/fetchRequest")
const fetchContactSuccess = createAction("contact/fetchSuccess")
const fetchContactError = createAction("contact/fetchError")

const removeContactRequest = createAction("contact/removeRequest")
const removeContactSuccess = createAction("contact/removeSuccess")
const removeContactError = createAction("contact/removeError")

const addContact = createAction("ADD_CONTACT")
const removeContact = createAction("REMOVE_CONTACT")
const filterContact = createAction("CHANGE_FITER")

const registerRequest = createAction("contact/registerRequest");
const registerSuccess = createAction("contact/registerSuccess");
const registerError = createAction("contact/registerError");

const logoutRequest = createAction("contact/logoutRequest");
const logoutSuccess = createAction("contact/logoutSuccess");
const logoutError = createAction("contact/logoutError");

const loginRequest = createAction("contact/loginRequest");
const loginSuccess = createAction("contact/loginSuccess");
const loginError = createAction("contact/loginError");

const getCurrentUserRequest = createAction("contact/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("contact/getCurrentUserSuccess");
const getCurrentUserError = createAction("contact/getCurrentUserError");

export {
  registerError,
  registerSuccess,
  registerRequest,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  addContactError,
  addContactSuccess,
  addContactRequest,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
  removeContactError,
  removeContactSuccess,
  removeContactRequest,
  addContact,
  removeContact,
  filterContact,
}
