import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as formReducer } from 'redux-form';

import questionsReducer from './questions/questions-reducer';

export function configureStore() {
    return createStore(
        combineReducers({
            form: formReducer,
            questionsReducer
        }),
        applyMiddleware(

        )
    );
}