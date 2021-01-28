import React from "react"
import { connect, useDispatch } from "react-redux"
import MainHeader from "../../components/common/MainHeader"
import { getAuthorized } from "../../modules/selector"

import { setAccessToken, setMyInfo } from "../../modules/auth"
import client from "../../lib/client"
import Cookies from "js-cookie"

// login 여부와 로그인한 사용자 정보를 속성값으로 수신
const MainHeaderContainer = ({ isAuthorized, myInfo }: { isAuthorized: boolean; myInfo: any }) => {

    // UseDispatch는 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch()

    // REST API 서버와 통신하는 모듈에 공통으로 설정한 요청헤더의 Authorization 필드를 삭제한다.
    // 쿠키에 저장된 액세스 토큰을 제거한다.
    // 스토어 상태에 저장된 액세스 토큰을 빈 문자열로 초기화한다.
    // 스토어 상태에 저장된 사용자정보를 무효화한다.
    const onLogout = () => {
        delete client.defaults.headers.common.Authorization
        Cookies.remove("accessToken")

        dispatch(setAccessToken(""))
        dispatch(setMyInfo(null))
    }

    return (
        <MainHeader
            myInfo={myInfo}
            isAuthorized={isAuthorized}
            onLogout={onLogout}
        />
    )
}

// 스토어 상태를 가공한 정보를 컴포넌트 속성으로 전달
export default connect((state: any) => {
    // console.log("state", state)
    return {
        isAuthorized: getAuthorized(state),
        myInfo: state.auth.myInfo
    }
})(MainHeaderContainer)