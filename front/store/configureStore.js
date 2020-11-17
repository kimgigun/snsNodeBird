import {createWrapper}  from 'next-redux-wrapper';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index'

const configureStore = () =>{
    const middlewares = [];
    const enhancer = process.env.Node_dev === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer);
    return store;
}

const wrapper = createWrapper(configureStore, {
    debug : process.env.Node_dev === 'development'
});

export default wrapper;