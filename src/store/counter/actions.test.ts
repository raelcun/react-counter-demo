import { createIncrementAction, createDecrementAction } from './actions';

describe('counter actions', () => {
    test('increment action snapshot', () => {
        expect(createIncrementAction(5)).toMatchSnapshot();
    });

    test('decrement action snapshot', () => {
        expect(createDecrementAction(5)).toMatchSnapshot();
    });
});
