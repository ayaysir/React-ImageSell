import { createAction } from "redux-actions"
import { takeLatest } from "redux-saga/effects"
import { createReducer } from "typesafe-actions"
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga"

export const FETCH_CHARGE_LIST = "coin/FETCH_CHARGE_LIST"
const FETCH_CHARGE_LIST_SUCCESS = "coin/FETCH_CHARGE_LIST_SUCCESS"
const FETCH_CHARGE_LIST_FAILURE = "coin/FETCH_CHARGE_LIST_FAILURE"

// 액션 생성 함수
export const fetchChargeList = createAction(FETCH_CHARGE_LIST)

// 비동기 액션을 수행하는 태스크 작성
const fetchChargeListSaga = createRequestSaga(FETCH_CHARGE_LIST, api.fetchChargeCoinList)

export function* coinSaga() {
    yield takeLatest(FETCH_CHARGE_LIST, fetchChargeListSaga)
}

// 초기 상태
const initialState = {
    chargeCoins: [],
    error: null
}

// 리듀서 함수 정의
const coin = createReducer(initialState, {
    [FETCH_CHARGE_LIST]: (state) => ({
        ...state,
        chargeCoins: []
    }),
    [FETCH_CHARGE_LIST_SUCCESS]: (state, action) => ({
        ...state,
        chargeCoins: action.payload
    }),
    [FETCH_CHARGE_LIST_FAILURE]: (state, action) => ({
        ...state,
        chargeCoins: action.payload
    }),
})

export default coin