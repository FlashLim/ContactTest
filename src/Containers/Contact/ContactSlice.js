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
    refreshContacts: state => {
      state.contacts = [...action.payload];
    },
    updateContact: (state, action) => {
      
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
