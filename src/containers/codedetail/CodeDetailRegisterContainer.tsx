import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import CodeDetailRegisterForm from "../../components/codedetail/CodeDetailRegisterForm"

import * as api from "../../lib/api"

const CodeDetailRegisterContainer = ({ history }: RouteComponentProps<any>) => {

    // 등록 처리
    const onRegister = async (groupCode: string, codeValue: string, codeName: string) => {
        try {
            const response = await api.writeCodeDetail(groupCode, codeValue, codeName)
            alert("등록이 완료되었습니다.")
            history.push(`/codedetail/read/${response.data.groupCode}/${response.data.codeValue}`)
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
        <CodeDetailRegisterForm
            onRegister={onRegister}
        />
    )
}
export default withRouter(CodeDetailRegisterContainer)