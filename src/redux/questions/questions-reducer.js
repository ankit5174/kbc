import {actionTypes} from "./questions-actions";
import {questions} from "../../util/questions-util";

const DEFAULT_STATE = {
    questionsList: questions
};

const generateResult = (state, answers, questionsList) => {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    questionsList.forEach((question) => {
        if(answers[question.id] === question.answer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    });
    return {
        ...state,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers
    }
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_FORM:
            return generateResult(state, action.answers, action.questionsList);
        default:
            return state;
    }
}