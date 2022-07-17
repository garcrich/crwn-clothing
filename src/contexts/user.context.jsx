import { useEffect, useReducer } from 'react';
import { createContext } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  console.log('dispatched: ', action)
  const { type, payload } = action;
  const {SET_CURRENT_USER} = USER_ACTION_TYPES;

  switch(type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [ {currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    })
    return unsubscribe;
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}