import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import auth, { authSaga } from "./auth"
import loading from "./loading"
import codeGroup, { codeGroupSaga } from "./codegroup"
import codeDetail, { codeDetailSaga } from "./codedetail"
import member, { memberSaga } from "./member"
import board, { boardSaga } from "./board"
import notice, { noticeSaga } from "./notice"
import item, { itemSaga } from "./item"

// 루트 리듀서
const rootReducer = combineReducers({
    auth,
    loading,
    codeGroup,
    codeDetail,
    member,
    board,
    notice,
    item
})

// 루트 사가
export function* rootSaga() {
    yield all([
        authSaga(),
        codeGroupSaga(),
        codeDetailSaga(),
        memberSaga(),
        boardSaga(),
        noticeSaga(),
        itemSaga()
    ])
}

export default rootReducer

// 루트 리듀서의 반환값을 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내기
export type RootState = ReturnType<typeof rootReducer>