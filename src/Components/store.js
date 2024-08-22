import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './widgetsReducer';

const store = configureStore({
  reducer: {
    widgets: widgetsReducer
  }
});

export default store;
