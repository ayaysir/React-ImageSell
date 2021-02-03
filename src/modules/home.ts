import { createAction } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga"

// 액션 타입
export const FETCH_STATUS = "home/FETCH_STATUS"
const FETCH_STATUS_SUCCESS = "home/FETCH_STATUS_SUCCESS"
const FETCH_STATUS_FAILURE = "pds/FETCH_LIST_FAILURE"

// 액션 생성 함수
export const fetchStatus = createAction(FETCH_STATUS)

// 비동기 액션을 수행하는 태스크 작성]
const fetchStatusSaga = createRequestSaga(FETCH_STATUS, api.getServerStatus)

// 코드그룹 사가 함수 작성
export function* homeSaga() {
    yield takeLatest(FETCH_STATUS, fetchStatusSaga)
}

// 초기 상태
const initialState = {
    success: "",
    error: null
}

// 리듀서 함수 정의 (상세 조회 상태인 codeGroup 변화를 일으킨다.)
const home = createReducer(initialState, {
    [FETCH_STATUS]: (state) => ({
        ...state,
        success: ""
    }),
    [FETCH_STATUS_SUCCESS]: (state, action) => ({
        ...state,
        success: action
    }),
    [FETCH_STATUS_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
})

export default home
