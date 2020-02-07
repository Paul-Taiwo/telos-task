export const getDocumentAction = (docId) => {
    return (dispatch, getStore, { getFirestore }) => {
        const firestore = getFirestore();

        firestore
            .collection("documents")
            .doc(docId)
            .get()
            .then((res) => {
                console.log("Response Payload", res._document );
                dispatch({ type: "DOC_FOUND", payload: res._document });
            })
            .catch((error) => {
                console.log("Response", error );
                dispatch({ type: "DOC_NOT_FOUND", payload: error });
            });
    }
}