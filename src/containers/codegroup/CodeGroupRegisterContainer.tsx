import React from "react"
import { withRouter } from "react-router-dom"
import CodeGroupRegisterForm from "../../components/codegroup/CodeGroupRegisterForm"

import * as api from "../../lib/api"

const CodeGroupRegisterContainer = ({ history }: { history: any}) => {

    // 등록 처리
    const onRegister = async (groupCode: any, groupName: any) => {
        try {
            const response = await api.writeCodeGroup(groupCode, groupName)
            alert("등록이 완료되었습니다.")
            history.push(`/codegroup/read/${response.data.codeGroup}`)
        } catch(err) {
            if(err.response.status === 400) {
                alert("잘못된 요청입니다.")
            } else if(err.response.status === 401) {
                alert("로그인이 필요합니다.")
                history.push("/signin")
            } else {
                alert(err.response.data.message)
            }
        }
    }

    return (
        <CodeGroupRegisterForm
            onRegister={onRegister}
        />
    )
}
export default withRouter(CodeGroupRegisterContainer)