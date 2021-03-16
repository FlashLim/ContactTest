import {createSlice} from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
  },
  reducers: {
    loadContacts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.contacts = [...action.payload];
    },
    refreshContacts: (state, action) => {
      state.contacts = [...action.payload];
    },
    updateContact: (state, action) => {
      if (action.payload.index !== undefined) {
        const newContacts = [...state.contacts];
        newContacts[action.payload.index] = {...action.payload};
        state.contacts = newContacts;
      } else {
        state.contacts = [...state.contacts, {...action.payload}];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadContacts,
  refreshContacts,
  updateContact,
} = contactSlice.actions;

export default contactSlice.reducer;
