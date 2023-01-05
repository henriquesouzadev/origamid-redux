import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import login from './login.js'
import photos from './photos.js'
import date from './date.js'
import products from './products.js'
import localStorage from '../middleware/localStorage.js'

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login, photos, date, products });
const store = configureStore({ reducer, middleware });

export default store;