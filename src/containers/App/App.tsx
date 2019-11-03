import * as React from 'react';
import { Button } from '../../components/Button';
import { OwnProps, StateProps, DispatchProps } from './types';

export const App: React.FC<OwnProps & StateProps & DispatchProps> = ({ title, count, increment, decrement }) => (
    <>
        <h1>{title}</h1>
        <h3>Value: {count}</h3>
        <Button onClick={() => decrement(1)}>&#9196; Decrement</Button>
        <Button onClick={() => increment(1)}>&#9195; Increment</Button>
    </>
);
