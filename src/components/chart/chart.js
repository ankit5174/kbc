import React from 'react';
import PropTypes from 'prop-types';
import {BarChart} from 'react-easy-chart';

export default class Chart extends React.Component {

    render() {
        let {wrongAnswers, correctAnswers} = this.props;
        return (
            <BarChart
                axes
                data={[
                    {x: 'Correct', y: correctAnswers, color: 'green'},
                    {x: 'InCorrect', y: wrongAnswers, color: 'red'}
                ]}
            />
        );
    }
}

Chart.propTypes = {
    wrongAnswers: PropTypes.number,
    correctAnswers: PropTypes.number
};