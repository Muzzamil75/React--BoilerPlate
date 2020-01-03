import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
// eslint-disable-next-line no-unused-vars
import style from './css/App.scss';
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import reducer from './redux/Store/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  reducer: reducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));
serviceWorker.unregister();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));