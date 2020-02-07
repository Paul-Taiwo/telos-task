import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { ReactReduxFirebaseProvider, getFirebase, } from "react-redux-firebase";
import {
    createFirestoreInstance,
    reduxFirestore,
    getFirestore
} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import fbConfig from "./config/firebaseConfig";
import rrfConfig from "./config/reactReduxFirebaseConfig";


// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();

// Create store
const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase)
    )
); 


ReactDOM.render( <Provider store={store}>
    
        <ReactReduxFirebaseProvider 
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
        >
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
