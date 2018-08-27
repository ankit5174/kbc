export const actionTypes = {
    SUBMIT_FORM: 'SUBMIT_FORM'
};

export const submitForm = (answers, questionsList) => {
    return {
        type: actionTypes.SUBMIT_FORM,
        answers: answers,
        questionsList: questionsList
    }
};