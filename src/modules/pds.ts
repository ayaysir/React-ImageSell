import { createAction } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga"

// 액션 타입
export const FETCH_ONE = "pds/FETCH_ONE"
const FETCH_ONE_SUCCESS = "pds/FETCH_ONE_SUCCESS"
const FETCH_ONE_FAILURE = "pds/FETCH_ONE_FAILURE"

export const FETCH_LIST = "pds/FETCH_LIST"
const FETCH_LIST_SUCCESS = "pds/FETCH_LIST_SUCCESS"
const FETCH_LIST_FAILURE = "pds/FETCH_LIST_FAILURE"

const ADD_ATTACH = "pds/ADD_ATTACH"
const REMOVE_ATTACH = "pds/REMOVE_ATTACH"
const RESET_ATTACH = "pds/RESET_ATTACH"
const FETCH_ATTACH_LIST = "pds/FETCH_ATTACH_LIST"

// 액션 생성 함수
export const fetchOne = createAction(FETCH_ONE, (itemId: number) => itemId)
export const fetchList = createAction(FETCH_LIST)

export const addAttach = createAction(ADD_ATTACH, (attach: any) => attach)
export const removeAttach = createAction(REMOVE_ATTACH, (index: any) => index)
export const resetAttach = createAction(RESET_ATTACH)
export const fetchAttachList = createAction(FETCH_ATTACH_LIST, (data: any) => data)

// 비동기 액션을 수행하는 태스크 작성
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchPds)
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchPdsList)

// 코드그룹 사가 함수 작성
export function* pdsSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga)
    yield takeLatest(FETCH_LIST, fetchListSaga)
}

// 초기 상태
const initialState = {
    pdsItem: null,
    pdsItems: [],
    attachments: [],
    error: null
}

// 리듀서 함수 정의 (상세 조회 상태인 codeGroup 변화를 일으킨다.)
const pds = createReducer(initialState, {
    [FETCH_ONE]: (state) => ({
        ...state,
        pdsItem: null
    }),
    [FETCH_ONE_SUCCESS]: (state, action) => ({
        ...state,
        pdsItem: action.payload
    }),
    [FETCH_ONE_FAILURE]: (state, action) => ({
        ...state,
        pdsItem: action.payload
    }),
    [FETCH_LIST]: (state) => ({
        ...state,
        pdsItems: []
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
        ...state,
        pdsItems: action.payload
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    }),
    [ADD_ATTACH]: (state, {payload: attach}) => {
        const newAttach = state.attachments.concat(attach)
        return {
            ...state,
            attachments: newAttach
        }
    },
    [REMOVE_ATTACH]: (state, {payload: index}) => {
        const attachmentsClone = [...state.attachments]
        attachmentsClone.splice(index, 1)
        return {
            ...state,
            attachments: attachmentsClone
        }
    },
    [FETCH_ATTACH_LIST]: (state, action) => ({
        ...state,
        attachments: action.payload
    }),
    [RESET_ATTACH]: (state) => ({
        ...state,
        attachments: []
    })
})

export default pds
