import { Action } from "redux"
import { createAction } from "redux-actions"
import { takeLatest, call, put } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import client from "../lib/client"

// 액션 타입
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN"
const LOGIN = "auth/LOGIN"

// 액션 생성 함수
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken: any) => accessToken)
export const login = createAction(LOGIN, ({ userId, password }: { userId: string; password: string }) => ({ userId, password }))



// 비동기 액션을 수행하는 태스크 작성
function* loginSaga(action: { payload: { userId: any; password: any } }) {
    try {
        const { userId, password } = action.payload
        const response = yield call(api.signIn, userId, password)
        const { authorization } = response.headers
        const accessToken = authorization.substring(7) // ??

        yield put(setAccessToken(accessToken))

        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } catch (err) {
        console.log(err)
    }
}

// 로그인 사가 함수 작성
export function* authSaga() {
    yield takeLatest(login, loginSaga)
}

// 초기 상태
const initialState = {
    accessToken: ""
}

// 페이로드를 가져오기 위한 헬퍼 타입
type GetPayload<A extends (...args: any[]) => any> = ReturnType<A> extends Action<infer P> ? P : never
type UserPayloads = GetPayload<typeof setAccessToken | typeof login>;
interface User {
    accessToken: ""
  }
  

// 리듀서 함수 정의
// redux-action에서 typesafe-actions로 마이그레이션함
// https://github.com/piotrwitek/typesafe-actions#migrating-from-redux-actions-to-typesafe-actions
const auth = createReducer(initialState, {
    [SET_ACCESS_TOKEN]: (state, { payload }) => ({
        ...state,
        accessToken: payload
    }),
},)

export default auth