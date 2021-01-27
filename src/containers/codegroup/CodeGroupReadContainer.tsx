import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchOne, FETCH_ONE } from "../../modules/codegroup"

import * as api from "../../lib/api"
import CodeGroupRead from "../../components/codegroup/CodeGroupRead"
import { RouteComponentPropsWithGroupCode } from "../../@types/ComponentProps"
import { RootState } from "../../modules"

const CodeGroupReadContainer = ({ groupCode, history }: RouteComponentPropsWithGroupCode) => {
    // 스토어 dispatch 사용 가능
    const dispatch = useDispatch()
    const loading: any = useSelector((state: RootState) => state.loading)

    // 스토어 상태 조회
    const { codeGroup, isLoading } = useSelector(
        ({ codeGroup, isLoading }:
            { codeGroup: any; isLoading: boolean }) => ({
                codeGroup: codeGroup.codeGroup,
                isLoading: loading[FETCH_ONE]

            })
    )

    const onRemove = async () => {
        try {
            await api.removeCodeGroup(groupCode)
            alert("삭제가 완료되었습니다.")
            history.push("/codegroup")
        } catch (err) {
            if (err.response.status === 400) {
                alert("잘못된 요청입니다.")
            } else if (err.response.status === 401) {
                alert("로그인이 필요합니다.")
                history.push("/signin")
            } else {
                alert(err.response.data.message)
            }
        }
    }

    // 마운트될 때 코드그룹 상세정보를 가져옴
    useEffect(() => {
        dispatch(fetchOne(groupCode))
    }, [dispatch, groupCode])

    return (
        <CodeGroupRead
            codeGroup={codeGroup}
            isLoading={isLoading}
            onRemove={onRemove}
            groupCode={groupCode}
        />
    )
}

export default withRouter(CodeGroupReadContainer)