const initialState = {
    deleteSuccess: null
}

const deleteDocumentReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE_DOC':
            console.log('Delete successful')
            return {
                ...state,
                deleteSuccess: true
            };
        case 'DELETE_FAILED':
            console.log('Delete failed')
            return {
                ...state,
                deleteSuccess: false
            };
    
        default:
            return state;
    }
}

export default deleteDocumentReducer;