const FormData = require("form-data");

export const createTaskAction = (taskData) => {
    return async (dispatach, getState, { getFirestore }) => {

        const firestore = getFirestore();
        const formData = new FormData();

        try {

            if (taskData.taskImage !== null || !!taskData.taskImage !== !1) {
                
                formData.append("file", taskData.taskImage);
                const imageUrl = await fetch("https://us-central1-telos-task-2ee4b.cloudfunctions.net/widgets/uploadFile",
                {
                    method: "POST",
                    header: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then(res => res.json());
    
                taskData.taskImage = imageUrl;
            }


            // Create task first
            await firestore.collection("tasks").add({
                ...taskData,
                dateCreated: new Date()
            });

            // Dispatch Action
            dispatach({ type: 'CREATE_TASK', });

        } catch (error) {
            console.log('Error here', error)
            dispatach({ type: "CREATE_TASK_ERROR", payload: error });
        }

    }
}