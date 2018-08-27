import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import QuestionSection from './question-section/question-section';
import './question-group.css';

class QuestionGroup extends React.Component {

    render() {
        const { questionsList, unansweredQuestion, resetForm} = this.props;
        return (
            <form className="question-group" onSubmit={this.props.handleSubmit}>
                <div className="questions">
                    {questionsList.map((question)=> {
                        return <Field key={question.id} name={question.id} component={(props)=><QuestionSection {...props} highlight={unansweredQuestion.includes(question.id)} question={question}/>} type="text" />
                    })}
                </div>
                <div className="controls">
                    <input type="submit" value="Submit"/>
                    <input type="reset" value="Reset" onClick={()=>resetForm()}/>
                </div>
            </form>
        );
    }
}

export default  reduxForm({
    form: 'questions'
})(QuestionGroup)

QuestionGroup.propTypes = {
    questionsList: PropTypes.array,
    unansweredQuestion: PropTypes.array,
    resetForm: PropTypes.func
};
