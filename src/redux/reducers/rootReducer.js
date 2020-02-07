import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import createTaskReducer from './createTaskReducer';
import updateDocumentReducer from './updateDocReducer';
import deleteDocumentReducer from './delDocReducer';
import getDocumentReducer from "./getDocReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    task: createTaskReducer,
    update: updateDocumentReducer,
    get: getDocumentReducer,
    delete: deleteDocumentReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
