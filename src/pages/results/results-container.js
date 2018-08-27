import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import Results from "./results";

function mapStateToProps(state) {
    return {
        correctAnswers: state.questionsReducer.correctAnswers,
        wrongAnswers: state.questionsReducer.wrongAnswers
    }
}

export default withRouter(connect(mapStateToProps, null)(Results));
