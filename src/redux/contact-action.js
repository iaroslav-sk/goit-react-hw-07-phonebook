// import types from './types';

// import { v4 as uuidv4 } from 'uuid';

import { createAction } from '@reduxjs/toolkit';
// ==================== fetch contact ================================//

const fetchContactRequest = createAction('contact/fetchContactRequest');
const fetchContactSuccess = createAction('contact/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

// ==================== add contact ================================//
const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contacts/addContactError');
// ==================== delete contact ================================//
const deleteContactRequest = createAction('contact/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

// const AddContact = createAction('contact/add', ({ name, number }) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction('contact/delete');

const filteredContact = createAction('contact/filter');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filteredContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

// ========redux action withuout redux-toolkit=========//

// const AddContact = ({ name, number }) => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

// const filteredContact = value => ({
//   type: types.FILTER_CONTACT,
//   payload: value,
// });

//===================================================//
