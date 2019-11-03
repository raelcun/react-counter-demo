import { Reducer } from 'redux';
import { CounterState, CounterActions, INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';

const initialState: CounterState = {
    value: 5,
};

export const reducer: Reducer<CounterState, CounterActions> = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, value: state.value + action.payload };
        case DECREMENT_COUNTER:
            return { ...state, value: state.value - action.payload };
        default:
            return state;
    }
};
