import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { MemberUsernoProps } from "../../interfaces/MemberInfo"
import MemberModifyForm from "../../components/member/MemberModifyForm"
import { modifyMember } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/member"
import httpStatusHandler from "../../util/httpStatusHandler"

const MemberModifyContainer = ({ userNo, history }: MemberUsernoProps) => {

    const dispatch = useDispatch()

    const { member, isLoading } = useSelector(({ member, loading }: any) => ({
       member: member.member,
       isLoading: loading[FETCH_ONE] 
    }))

    const onModify = async(userNo: number, payload: any) => {
        try {
            await modifyMember(userNo, payload)
            alert("수정이 완료되었습니다.")
            history.push(`/member/read/${userNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
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