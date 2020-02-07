const initialState = {
    success: null,
};

const updateDocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_DOC":
            console.log("Updated Successfully");
            return {
                ...state,
                success: true,
            };

        case "UPDATE_FAILED":
            console.log("Update Failed");
            return {
                ...state,
                success: false
            };

        default:
            return state;
    }
};

export default updateDocumentReducer;