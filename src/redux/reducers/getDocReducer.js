const INITIAL_STATE = {
    requestedDoc: null,
}

const getDocumentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DOC_FOUND":
            if (action.payload === null) {
                return {
                    ...state,
                    requestedDoc: 'Not found'
                }
            } else {
                return {
                    ...state,
                    requestedDoc: action.payload
                }
            };

        case "DOC_NOT_FOUND":
            return {
                ...state,
                requestedDoc: action.payload.message,
            };

        default:
            return state;
    }
}

export default getDocumentReducer;
