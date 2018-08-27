import React from 'react';
import PropTypes from 'prop-types';
import './question-section.css';

export default class QuestionSection extends React.Component {

    render() {
        let {question, input, highlight} = this.props;
        return (
            <div className="question-section">
                <label className={highlight?'highlight':''}>{question.id + '.  ' + question.question}</label>
                <div>
                    {question.options.map((option, index) => {
                        let checked = input.value === option;
                        return <div key={index}>
                            <input type="radio" checked={checked} onChange={(e)=>input.onChange(e.target.value)} name={question.id} value={option}/> {option}<br/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

QuestionSection.propTypes = {
    question: PropTypes.object,
    highlight: PropTypes.bool
};