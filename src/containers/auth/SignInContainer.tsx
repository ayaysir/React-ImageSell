import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SignInForm from "../../components/auth/SignInForm"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { checkMyInfo, login } from "../../modules/auth"

// withRotuer 함수의 기능이 적용되어 속성으로 history를 전달받음
const SignInContainer: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
    // 스토어 디스패치 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { accessToken, myInfo } = useSelector( ({ auth }: { auth: any }) => ({
        accessToken: auth.accessToken,
        myInfo: auth.myInfo
    }))

    // 로그인 처리
    const onSignIn = (userId: string, password: string) => {
        try {
            dispatch(login({ userId, password }))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(accessToken) {
            dispatch(checkMyInfo())
        }
    }, [accessToken, dispatch])

    // 마운트 될 때 액세스토큰 상태 정보 확인
    useEffect(() => {
        if(myInfo) {
            alert("로그인 되었습니다.")
            history.push("/")
        }
    }, [myInfo, history])

    // 로그인 컴포넌트 표시
    return <SignInForm onSignIn={onSignIn} />

}

export default withRouter(SignInContainer)