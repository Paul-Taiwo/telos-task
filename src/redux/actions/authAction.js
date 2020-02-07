export const signIn = (email, password ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (response) => {

                try {
                    const doc = await firestore.collection('users').doc(response.user.uid).get();

                    const fields = doc._document.proto.fields;

                    if (fields.isAdmin.booleanValue === !1) {
                        firebase.auth().signOut();
                        throw new Error('You are not an Admin, Please login through the users login page');
                    }

                    dispatch({ type: "LOGIN_SUCCESS", payload: response.user }); 

                } catch (error) {
                    dispatch({
                        type: "LOGIN_ERROR",
                        payload: error
                    });
                }
            })
            .catch ((error) => {
                dispatch({ 
                    type: 'LOGIN_ERROR', 
                    payload:  error  
                })
        });
    }
};

export const signInUser = (email, password ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (response) => {

                try {
                    const doc = await firestore.collection('users').doc(response.user.uid).get();

                    const fields = doc._document.proto.fields;

                    if (fields.isAdmin.booleanValue === !0) {
                        firebase.auth().signOut();
                        throw new Error('User is an Admin, Please login through the Admin login page');
                    }

                    dispatch({ type: "LOGIN_SUCCESS", payload: response.user }); 

                } catch (error) {
                    dispatch({
                        type: "LOGIN_ERROR",
                        payload: error
                    });
                }
            })
            .catch ((error) => {
                dispatch({ 
                    type: 'LOGIN_ERROR', 
                    payload:  error  
                })
        });
    }
};

export const signUp = (email, password ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            return firestore.collection('users')
                .doc(res.user.uid)
                .set({
                    isAdmin: false,
                })
                .catch((error) => {
                    dispatch({
                        type: "SIGNUP_ERROR",
                        payload: error
                    });
                });
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'}) 
        })
        .catch ((error) => {
            dispatch({ 
                type: 'SIGNUP_ERROR', 
                payload:  error  
            })
        });
    }
};

export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            });
    }
}
