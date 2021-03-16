import {configureStore} from '@reduxjs/toolkit';
import contactReducer from '../Containers/Contact/ContactSlice';

export default configureStore({
  reducer: {
    contact: contactReducer,
  },
});
