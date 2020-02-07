export const createTaskAction = (taskData) => {
    return async (dispatach, getState, { getFirestore }) => {
        const firestore = getFirestore();

        try {
            // Create task first
            const result = await firestore.collection("tasks").add({
                ...taskData,
                dateCreated: new Date()
            });

            // Get created task ID
            const taskId = result._key.path.segments[1];
          
            console.log('Result1', taskId)
            // Dispatch Action
            dispatach({ type: 'CREATE_TASK', });

        } catch (error) {
            console.log('Error here', error)
            dispatach({ type: "CREATE_TASK_ERROR", payload: error });
        }

    }
}