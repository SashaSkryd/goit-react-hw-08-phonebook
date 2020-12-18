import axios from "axios"
import {
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  removeContactSuccess,
  removeContactError,
  removeContactRequest,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
} from "./actions/actions.js"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.Authorization = ""
  },
}

const register = (credentials) => (dispatch) => {
  dispatch(registerRequest())
  axios
    .post("/users/signup", credentials)
    .then(({ data }) => {
      dispatch(registerSuccess(data))
    })
    .catch((error) => {
      dispatch(registerError(error))
    })
}

const login = (credentials) => (dispatch) => {
  dispatch(loginRequest())
  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      dispatch(loginSuccess(data))
    })
    .catch((error) => {
      dispatch(loginError(error))
    })
}

const logout = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState()

  dispatch(logoutRequest())
  token.set(persistedToken)

  axios
    .post("/users/logout")
    .then(() => {
      dispatch(logoutSuccess())
      token.unset()
    })
    .catch((error) => {
      dispatch(logoutError(error))
    })
}

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState()

  if (!persistedToken) {
    return
  }

  token.set(persistedToken)
  dispatch(getCurrentUserRequest())

  axios
    .get("/users/current")
    .then(({ data }) => {
      dispatch(getCurrentUserSuccess(data))
    })
    .catch((error) => {
      dispatch(getCurrentUserError(error))
    })
}

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest())

  axios
    .post("/contacts", { ...contact })
    .then((response) => {
      dispatch(addContactSuccess(response.data))
    })
    .catch((error) => dispatch(addContactError(error)))
}

const fetchContact = () => (dispatch, getState) => {
    const {
    auth: { token: persistedToken },
  } = getState()

  if (!persistedToken) {
    return
  }
  token.set(persistedToken)
  dispatch(fetchContactRequest())
  
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)))
}

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest())

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id))
    })
    .catch((error) => dispatch(removeContactError(error)))
}

export { addContact, fetchContact, removeContact, login, register, getCurrentUser, logout }
