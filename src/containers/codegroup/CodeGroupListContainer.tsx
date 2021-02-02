import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CodeGroupList from "../../components/codegroup/CodeGroupList"
import { fetchList, FETCH_LIST } from "../../modules/codegroup"

const CodeGroupListContainer = () => {
    // 스토어 dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { codeGroups, isLoading } = useSelector(
        ({ codeGroup, loading }: any) => {
            return ({
                codeGroups: codeGroup.codeGroups,
                isLoading: loading[FETCH_LIST]
            })
        }
    )

    // 마운트될 때 코드그룹 목록을 가져옴
    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return <CodeGroupList codeGroups={codeGroups} isLoading={isLoading} />
}
export default CodeGroupListContainer