import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { MemberUsernoProps } from "../../interfaces/MemberInfo"
import MemberRead from "../../components/member/MemberRead"
import { removeMember } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/member"
import httpStatusHandler from "../../util/httpStatusHandler"

const MemberReadContainer = ({ userNo, history }: MemberUsernoProps) => {

    const dispatch = useDispatch()

    const { member, isLoading } = useSelector(({ member, loading }: any) => ({
        member: member.member,
        isLoading: loading[FETCH_ONE] 
    }))

    const onRemove = async() => {
        try {
            await removeMember(userNo)
            alert("삭제가 완료되었습니다.")
            history.push(`/member`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(userNo))
    }, [dispatch, userNo])

    return (
        <MemberRead
            member={member}
            isLoading={isLoading}
            userNo={userNo}
            onRemove={onRemove}
        />
    )
}

export default withRouter(MemberReadContainer)