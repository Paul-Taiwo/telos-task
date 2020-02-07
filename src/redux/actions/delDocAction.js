export const deleteDocumentAction = (docId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firestore
            .collection("documents")
            .doc(docId)
            .delete()
            .then(() => {
                console.log("Ehn");
                dispatch({ type: "DELETE_DOC" });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: "DELETE_FAILED" });
            });
    }
}
