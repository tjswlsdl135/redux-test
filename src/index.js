import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
  // React 0.13의 이슈를 회피하기 위해 
  // 반드시 함수로 감싸줍니다.
  <Provider store={store}>
    {/* {() => <App />} */}
    <App />
  </Provider>,
  document.getElementById('root')
);