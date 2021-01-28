import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { MemberModifyInfo, MemberUsernoProps } from "../../@types/MemberInfo"
import MemberModifyForm from "../../components/member/MemberModifyForm"
import { modifyMember } from "../../lib/api"
import { RootState } from "../../modules"
import { fetchOne, FETCH_ONE } from "../../modules/member"

const MemberModifyContainer = ({ userNo, history }: MemberUsernoProps) => {

    const dispatch = useDispatch()
    const loading: any = useSelector((state: RootState) => state.loading)

    const { member, isLoading } = useSelector(({ member, isLoading }: MemberModifyInfo) => ({
       member: member.member,
       isLoading: loading[FETCH_ONE] 
    }))

    const onModify = async(userNo: number, payload: any) => {
        try {
            await modifyMember(userNo, payload)
            alert("수정이 완료되었습니다.")
            history.push(`/member/read/${userNo}`)
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

    useEffect(() => {
        dispatch(fetchOne(userNo))
    }, [dispatch, userNo])

    return (
        <MemberModifyForm
            member={member}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
}

export default withRouter(MemberModifyContainer)