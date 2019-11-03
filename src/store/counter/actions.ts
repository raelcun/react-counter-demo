import { INCREMENT_COUNTER, IncrementAction, DecrementAction, DECREMENT_COUNTER } from './types';

export const createIncrementAction = (amount: number): IncrementAction => ({
    type: INCREMENT_COUNTER,
    payload: amount,
});

export const createDecrementAction = (amount: number): DecrementAction => ({
    type: DECREMENT_COUNTER,
    payload: amount,
});
