import { createSelector } from "@reduxjs/toolkit"

const getContact = (state) => state.auth.contacts

const getFilter = (state) => state.auth.filter

const getVisibleFilter = (state) => state.auth.contacts.length > 1

// const getFilteredItems = state => {
//     const contacts = getContact(state)

//     const filter = getFilter(state)

//     return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

// }

const getFilteredItems = createSelector([getContact, getFilter], (auth, filter) => {
  return auth.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

export default {
  getContact,
  getFilteredItems,
  getVisibleFilter,
  getFilter,
}
