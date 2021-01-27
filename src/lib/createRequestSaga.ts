import { createAction } from "redux-actions"
import { call, put } from "redux-saga/effects"
import { startLoading, endLoading } from "../modules/loading"

export default function createRequestSaga(type: any, request: any) {
    const CALL_SUCCESS = `${type}_SUCCESS`
    const CALL_FAILURE = `${type}_FAILURE`

    const callSuccess = createAction(CALL_SUCCESS, (data: any) => data)
    const callFailure = createAction(CALL_FAILURE, (e: any) => e)

    return function*(action: any) {
        yield put(startLoading(type))
        try {
            const response = yield call(request, action.payload)
            yield put(callSuccess(response.data))
        } catch(err) {
            yield put(callFailure(err))
        }
        yield put(endLoading(type))
    }
}