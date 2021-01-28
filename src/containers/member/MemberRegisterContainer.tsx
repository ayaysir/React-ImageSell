
import { RouteComponentProps, withRouter } from "react-router-dom"
import MemberRegisterForm from "../../components/member/MemberRegisterForm"
import * as api from "../../lib/api"

const MemberRegisterContainer = ({ history }: RouteComponentProps<any>) => {

    const onRegister = async(userIde: string, userName: string, userPassword: string, job: string) => {
        try {
            const response = await api.writeMember(userIde, userName, userPassword, job)
            alert("등록이 완료되었습니다.")
            history.push(`/member/read/${response.data.userNo}`)
        } catch (err) {
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
        <MemberRegisterForm onRegister={onRegister} />
    )
}

export default withRouter(MemberRegisterContainer)

