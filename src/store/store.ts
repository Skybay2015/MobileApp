import {  configureStore} from '@reduxjs/toolkit'
import mainSlice from './slices/mainSlice'
import {

   firebaseReducer,
   
 } from 'react-redux-firebase'
 import {  firestoreReducer } from 'redux-firestore'

// here we create store with 3 reducers Main where all our data, firebase and firestore

const store = configureStore({
   reducer: {
      main: mainSlice,
      firestore: firestoreReducer,
      firebase: firebaseReducer,
     
   },
})
// get rootState type
export type RootState = ReturnType<typeof store.getState>
// get appDispatch type
export type AppDispatch = typeof store.dispatch

export default store