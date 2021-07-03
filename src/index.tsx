import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'firebase/firestore';
import firebase from './firebase/firebaseConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import store from './store/store';

// create react-redux-firebase config

const rrfConfig = {
   userProfile: 'result',
   useFirestoreForProfile: true,
};

// create react-redux-firebase props

const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance,
};

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
         </ReactReduxFirebaseProvider>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default firebase;
