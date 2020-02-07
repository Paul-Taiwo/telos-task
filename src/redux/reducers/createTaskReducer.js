const initialState = {
    success: null,
}

const createTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return {
                ...state,
                success: true,
            };

        case 'CREATE_TASK_ERROR':
            return {
                ...state,
                success: false,
            };
    
        default:
            return state;
    }

};

export default createTaskReducer;