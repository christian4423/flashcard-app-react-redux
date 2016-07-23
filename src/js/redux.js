import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducer from './reducers/index';

const middleware = applyMiddleware(promise(), thunk, logger());


export default createStore(reducer, middleware)