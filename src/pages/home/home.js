import React from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import kbc from '../../resources/kbc_awesome.mp3';

import QuestionGroup from '../../components/question-group/question-group';
import './home.css';
import {questions} from "../../util/questions-util";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unansweredQuestion: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleSubmit(values) {
        let {questionsList, submitForm, resetForm, history} = this.props;
        if (Object.keys(values).length === questionsList.length) {
            submitForm(values, questionsList);
            resetForm();
            history.push('/results');
        } else {
            let unansweredQuestion = [];
            const answeredKeys = Object.keys(values);
            questionsList.forEach((question) => {
                if(!answeredKeys.includes(question.id)) {
                    unansweredQuestion.push(question.id);
                }
            });
            this.setState({unansweredQuestion: unansweredQuestion});
        }
    }

    resetForm() {
        let {resetForm} = this.props;
        resetForm();
        this.setState({unansweredQuestion:[]});
    }

    render() {
        let {questionsList} = this.props;
        return (
            <div>
                <Sound
                    url={kbc}
                    playStatus={Sound.status.PLAYING}
                />
                <div className="Container">
                    <div className="Middle">
                        <QuestionGroup resetForm={this.resetForm} unansweredQuestion={this.state.unansweredQuestion} onSubmit={this.handleSubmit}
                                       questionsList={questionsList}/>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    questionsList: PropTypes.array,
    resetForm: PropTypes.func,
    submitForm: PropTypes.func
};