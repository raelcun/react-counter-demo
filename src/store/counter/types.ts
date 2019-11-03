import { AppAction } from '../types';

export type CounterState = {
    value: number;
};

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export type IncrementAction = AppAction<typeof INCREMENT_COUNTER, number>;
export type DecrementAction = AppAction<typeof DECREMENT_COUNTER, number>;

export type CounterActions = IncrementAction | DecrementAction;
