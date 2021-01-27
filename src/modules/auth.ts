import { createAction } from "redux-actions"
import { takeLatest, call, put } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import client from "../lib/client"
import Cookies from "js-cookie"

// 액션 타입
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN"
const LOGIN = "auth/LOGIN"
const SET_MY_INFO = "auth/SET_MY_INFO"
const CHECK_MY_INFO = "auth/CHECK_MY_INFO"

// 액션 생성 함수
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken: any) => accessToken)
export const login = createAction(LOGIN, ({ userId, password }: { userId: string; password: string }) => ({ userId, password }))
export const setMyInfo = createAction(SET_MY_INFO, (myInfo: any) => myInfo)
export const checkMyInfo = createAction(CHECK_MY_INFO)

// 비동기 액션을 수행하는 태스크 작성
function* loginSaga(action: { payload: { userId: any; password: any } }) {
    try {
        const { userId, password } = action.payload
        const response = yield call(api.signIn, userId, password)
        const { authorization } = response.headers
        const accessToken = authorization.substring(7) // ??

        yield put(setAccessToken(accessToken))

        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

        // 쿠키에 액세스 토큰 저장
        Cookies.set("accessToken", accessToken, { expires: 1 })
    } catch (err) {
        console.log("error from loginSaga", err)
    }
}

function* checkMyInfoSaga() {
    try {
        const response = yield call(api.getMyInfo)
        console.log("checkMyInfoSaga", response);
        
        yield put(setMyInfo(response.data))
    } catch(err) {
        console.log(err)
    }
}

// 로그인 사가 함수 작성
export function* authSaga() {
    yield takeLatest(login, loginSaga)
    // checkMyInfo 실행하는 사가 함수
    yield takeLatest(checkMyInfo, checkMyInfoSaga)
}


// 초기 상태
const initialState = {
    accessToken: "",
    myInfo: null
} 

// 리듀서 함수 정의
// redux-action에서 typesafe-actions로 마이그레이션함
// https://github.com/piotrwitek/typesafe-actions#migrating-from-redux-actions-to-typesafe-actions
const auth = createReducer(initialState, {
    [SET_ACCESS_TOKEN]: (state, { payload }) => ({
        ...state,
        accessToken: payload
    }),
    [SET_MY_INFO]: (state, { payload }) => ({
        ...state,
        myInfo: payload
    })
},)

export default auth