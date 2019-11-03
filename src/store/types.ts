import { Action } from 'redux';
import { CounterActions } from './counter/types';

export interface AppAction<T, P> extends Action<T> {
    payload: P;
}

export type AllActions = CounterActions;
