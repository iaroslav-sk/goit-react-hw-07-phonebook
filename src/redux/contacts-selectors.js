import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts;

const loadingContacts = state => state.loading;

const getFilter = state => state.filter;

// const filteredContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normaliseNameContact = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normaliseNameContact),
//   );
// };

const filteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normaliseNameContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseNameContact),
    );
  },
);

export { loadingContacts, getFilter, filteredContacts };
