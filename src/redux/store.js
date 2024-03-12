import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postReducer } from './slices';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};



const rootReducer = combineReducers({
  post: postReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);