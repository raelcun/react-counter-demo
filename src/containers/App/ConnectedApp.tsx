import { App } from './App';
import { createDecrementAction, createIncrementAction } from '../../store/counter/actions';
import { StateProps, DispatchProps, OwnProps } from './types';
import { AppState } from '../../store';
import { connect } from 'react-redux';

export const ConnectedApp = connect<StateProps, DispatchProps, OwnProps, AppState>(
    state => ({
        count: state.counter.value,
    }),
    dispatch => ({
        increment: amount => dispatch(createIncrementAction(amount)),
        decrement: amount => dispatch(createDecrementAction(amount)),
    }),
)(App);
