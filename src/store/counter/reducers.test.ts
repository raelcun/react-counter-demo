import { reducer } from './reducers';
import { createIncrementAction, createDecrementAction } from './actions';

describe('counter reducer', () => {
    test('should handle increment action', () => {
        const initialState = { value: 1 };
        const incrementAction = createIncrementAction(2);
        const expectedState = { value: 3 };

        expect(reducer(initialState, incrementAction)).toEqual(expectedState);
    });

    test('should handle decrement action', () => {
        const initialState = { value: 5 };
        const decrementAction = createDecrementAction(3);
        const expectedState = { value: 2 };

        expect(reducer(initialState, decrementAction)).toEqual(expectedState);
    });

    test('should have default state', () => {
        expect(reducer(undefined, createDecrementAction(0))).toEqual({ value: 5 });
    });

    test('should return default state for invalid actions', () => {
        const initialState = { value: 5 };
        const fakeAction = { type: 'NOT_REAL' as any, payload: 0 };
        const expectedState = initialState;

        expect(reducer(initialState, fakeAction)).toEqual(expectedState);
    });
});
