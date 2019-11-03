import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer } from './counter/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    counter: reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const createAppStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware()));
