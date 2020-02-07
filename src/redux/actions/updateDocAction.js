export const updateDocumentAction = ({ docID, docContent, docTitle }, updateDocTitle) => {
    return (dispatch, getStore, { getFirestore }) => {
        const firestore = getFirestore();
        
        const docDataObject = (updateDocTitle) 
            ? { docTitle: docTitle, docContent: docContent, }
            : { docContent: docContent }

        firestore.collection('documents')
            .doc(docID).update(docDataObject)
            .then(() => {
                console.log('Ehn')
                dispatch({ type: 'UPDATE_DOC' })
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: 'UPDATE_FAILED' })
            });

    }
}