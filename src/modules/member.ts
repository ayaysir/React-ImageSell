import { createAction } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga"

// action type
export const FETCH_ONE = "member/FETCH_ONE"
export const FETCH_ONE_SUCCESS = "member/FETCH_ONE_SUCCESS"
export const FETCH_ONE_FAILURE = "member/FETCH_ONE_FAILURE"

export const FETCH_LIST = "member/FETCH_LIST"
export const FETCH_LIST_SUCCESS = "member/FETCH_LIST_SUCCESS"
export const FETCH_LIST_FAILURE = "member/FETCH_LIST_FAILURE"

// createAction
export const fetchOne = createAction(FETCH_ONE, (userNo: number) => userNo)
export const fetchList = createAction(FETCH_LIST)

// 비동기 액션을 수행하는 태스크
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchMember)
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchMemberList)

// saga function
export function* memberSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga)
    yield takeLatest(FETCH_LIST, fetchListSaga)
}

// init state
const initialState = {
    member: null,
    members: [],
    error: null
}

// reducer function
const member = createReducer(initialState, {
    [FETCH_ONE]: (state) => ({
        ...state,
        member: null
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
        ...state,
        member: action.payload
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
    [FETCH_LIST]: (state) => ({
        ...state,
        members: []
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
        ...state,
        members: action.payload
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
})

export default member