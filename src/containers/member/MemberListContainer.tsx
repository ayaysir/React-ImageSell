import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MemberList from "../../components/member/MemberList"
import { RootState } from "../../modules"
import { fetchList, FETCH_LIST } from "../../modules/member"

const MemberListContainer = () => {

    const dispatch = useDispatch()
    const loading: any = useSelector((state: RootState) => state.loading)

    const { members, isLoading } = useSelector(({ member, isLoading }: {member: any, isLoading: boolean}) => {
        console.log("members", member)
        return ({
            members: member.members,
            isLoading: loading[FETCH_LIST]
        })
    })

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return (  
        <MemberList
            members={members}
            isLoading={isLoading}
        />
    )
}

export default MemberListContainer

