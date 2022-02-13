import React from 'react';
import {createStore,combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'moviesok-key',
    storage
}

const rootReducer=combineReducers({
    user:userReducer,
    auth:authReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

const configureStore=createStore(persistedReducer)

const persistor=persistStore(configureStore)


export default configureStore;
export {persistor}