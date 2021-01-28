import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { MemberReadInfo, MemberUsernoProps } from "../../@types/MemberInfo"
import MemberRead from "../../components/member/MemberRead"
import { removeMember } from "../../lib/api"
import { RootState } from "../../modules"
import { fetchOne, FETCH_ONE } from "../../modules/member"

const MemberReadContainer = ({ userNo, history }: MemberUsernoProps) => {

    const dispatch = useDispatch()
    const loading: any = useSelector((state: RootState) => state.loading)

    const { member, isLoading } = useSelector(({ member, isLoading }: MemberReadInfo) => ({
        member: member.member,
        isLoading: loading[FETCH_ONE] 
    }))

    const onRemove = async() => {
        try {
            await removeMember(userNo)
            alert("삭제가 완료되었습니다.")
            history.push(`/member`)
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
        <MemberRead
            member={member}
            isLoading={isLoading}
            userNo={userNo}
            onRemove={onRemove}
        />
    )
}

export default withRouter(MemberReadContainer)