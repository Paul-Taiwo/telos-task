const initState = {
    authError: null,
    authFailed: null,
    user: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': 
        const errorMessage = action.payload.message;
        return {
            ...state, 
            authError: errorMessage,
            authFailed: true
        };

        case 'LOGIN_SUCCESS':
        return {
            ...state,
            user: action.payload,
            authError: null,
            authFailed: false,
        };

        case 'SIGNUP_ERROR': 
        const signupErrorMessage = action.payload.message;
        console.log('In err', signupErrorMessage)
        return {
            ...state, 
            authError: signupErrorMessage,
            authFailed: true
        };

        case 'SIGNUP_SUCCESS':
        return {
            ...state,
            authError: null,
            authFailed: false,
        };

        case 'SIGNOUT_SUCCESS':
        return state;

        default:
        return state;
    }
};

export default authReducer;
