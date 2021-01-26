import React from "react"
import * as api from "../../lib/api"
import { withRouter, RouteComponentProps } from "react-router-dom"
import AdminSetupForm from "../../components/member/AdminSetupForm"

// withRouter 함수의 기능이 적용되어 속성으로 history를 전달받음
const AdminSetupContainer: React.FunctionComponent<RouteComponentProps> = ({ history }) => {
    // console.log(typeof history, history)

    // 등록 처리
    const onRegister = async(userId: number, userName: string, userPassword: string) => {
        try {
            await api.adminSetup(userId, userName, userPassword)
            alert("등록이 완료되었습니다.")
            history.push("/")
        } catch(err) {
            console.log(err.response.data)
            alert(err.response.data.message)
        }
    }

    // 최초관리자 등록 폼 컴포넌트 표시
    return <AdminSetupForm onRegister={onRegister} />
}

// withRouter 함수를 사용하여 history 객체에 접근
export default withRouter(AdminSetupContainer)