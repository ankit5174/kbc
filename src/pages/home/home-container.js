import {connect} from 'react-redux';
import {reset} from 'redux-form';
import {withRouter} from "react-router-dom";
import Home from "./home";
import {submitForm} from "../../redux/questions/questions-actions";

function mapStateToProps(state) {
    return {
        questionsList: state.questionsReducer.questionsList
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        resetForm: ()=>{dispatch(reset('questions'))},
        submitForm: (answers, questionsList) => {dispatch(submitForm(answers,questionsList))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Home));
