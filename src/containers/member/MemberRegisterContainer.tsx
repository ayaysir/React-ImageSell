
import { RouteComponentProps, withRouter } from "react-router-dom"
import MemberRegisterForm from "../../components/member/MemberRegisterForm"
import * as api from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const MemberRegisterContainer = ({ history }: RouteComponentProps<any>) => {

    const onRegister = async(userId: string, userName: string, userPassword: string, job: string) => {
        try {
            const response = await api.writeMember(userId, userName, userPassword, job)
            alert("등록이 완료되었습니다.")
            history.push(`/member/read/${response.data.userNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    return (
        <MemberRegisterForm onRegister={onRegister} />
    )
}

export default withRouter(MemberRegisterContainer)

