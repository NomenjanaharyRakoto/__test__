import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'localforage';
const persisteConfig = {
    key: 'root',
    storage: storage,
}

const pReducer = persistReducer(persisteConfig, rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(pReducer, compose(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store;