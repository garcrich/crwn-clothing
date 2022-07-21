import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from './root-reducer'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'


const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState: ', store.getState())

  next(action)

  console.log('next state: ', store.getState())
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);