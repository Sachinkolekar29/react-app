import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
import configureStore from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

const store= configureStore();
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      
    </Provider>,
  document.getElementById('root')
);


