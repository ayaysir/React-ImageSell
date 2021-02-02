import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer, { rootSaga } from "./modules"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

import Cookies from "js-cookie"
import { setAccessToken, checkMyInfo } from "./modules/auth"
import client from "./lib/client"

// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware()

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// 저장된 토큰을 가지고 로그인 처리 (스토어 상태에 액세스토큰 저장)를 하고 로그인한 사용자 정보를 얻는다.
function loadUser() {
  try {
    const savedToken = Cookies.get("accessToken")
    if(!savedToken) return;
    store.dispatch(setAccessToken(savedToken))
    client.defaults.headers.common.Authorization = `Bearer ${savedToken}`
    store.dispatch(checkMyInfo())
  } catch(err) {
    console.log("error from loadUser", err)
  }
}

// 사가 미들웨어 실행
sagaMiddleware.run(rootSaga)

// 저장된 토큰으로 로그인을 처리하는 함수를 실행한다. (사가 실행 이후)
loadUser()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
