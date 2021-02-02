import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import CodeGroupModifyForm from "../../components/codegroup/CodeGroupModifyForm"
import { fetchOne, FETCH_ONE } from "../../modules/codegroup"
import * as api from "../../lib/api"
import { RouteComponentPropsWithGroupCode } from "../../interfaces/ComponentProps"

const CodeGroupModifyContainer = ({ groupCode, history }: RouteComponentPropsWithGroupCode) => {
    // 스토어 dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { codeGroup, isLoading } = useSelector(
        ({ codeGroup, loading }: any) => ({
                codeGroup: codeGroup.codeGroup,
                isLoading: loading[FETCH_ONE]
            })
    )

    // 수정 처리
    const onModify = async (groupCode: any, groupName: any) => {
        try {
            await api.modifyCodeGroup(groupCode, groupName)
            alert("수정이 완료되었습니다.")
            history.push("/codegroup/read/" + groupCode)
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

    // 마운트될 때 코드그룹 상세정보를 가져옴
    useEffect(() => {
        dispatch(fetchOne(groupCode))
    }, [dispatch, groupCode])

    return (
        <CodeGroupModifyForm
            codeGroup={codeGroup}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
}
export default withRouter(CodeGroupModifyContainer)