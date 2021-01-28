import { createAction } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga"

// 액션 타입
export const FETCH_ONE = "codeDetail/FETCH_ONE"
const FETCH_ONE_SUCCESS = "codeDetail/FETCH_ONE_SUCCESS"
const FETCH_ONE_FAILURE = "codeDetail/FETCH_ONE_FAILURE"

export const FETCH_LIST = "codeDetail/FETCH_LIST"
const FETCH_LIST_SUCCESS = "codeDetail/FETCH_LIST_SUCCESS"
const FETCH_LIST_FAILURE = "codeDetail/FETCH_LIST_FAILURE"

// 액션 생성 함수
export const fetchOne = createAction(FETCH_ONE, (groupCode: any, codeValue: any) => ({groupCode, codeValue}))
export const fetchList = createAction(FETCH_LIST)

// 비동기 액션을 수행하는 태스크 작성
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchCodeDetail)
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeDetailList)

// 코드 사가 함수 작성
export function* codeDetailSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga)
    yield takeLatest(FETCH_LIST, fetchListSaga)
}

// 초기 상태
const initialState = {
    codeDetail: null,
    codeDetails: [],
    error: null
}

// 리듀서 함수 정의 (상세 조회 상태인 codeDetail 변화를 일으킨다.)
const codeDetail = createReducer(initialState, {
    [FETCH_ONE]: (state) => ({
        ...state,
        codeDetail: null
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
        ...state,
        codeDetail: action.payload
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
    [FETCH_LIST]: (state) => ({
        ...state,
        codeDetails: []
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
        ...state,
        codeDetails: action.payload
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
})

export default codeDetail
