import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../../components/chart/chart';
import './results.css';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {wrongAnswers, correctAnswers} = this.props;
        return (
            <div className="results-container">
                <div className="header">
                    <b>Results</b>
                </div>
                <div className="results">
                    <Chart wrongAnswers={wrongAnswers} correctAnswers={correctAnswers}/>
                </div>
                <div onClick={()=>{this.props.history.push('/')}} className="footer">
                    Back
                </div>
            </div>
        );
    }
}

Results.propTypes = {
    correctAnswers: PropTypes.number,
    wrongAnswers: PropTypes.number
};