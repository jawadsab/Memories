import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { applyMiddleware,createStore,compose } from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers";
import MainRouter from "./MainRouter";


const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <MainRouter />
  </Provider>,
  document.getElementById('root')
);
