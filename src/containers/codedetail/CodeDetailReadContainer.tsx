import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchOne, FETCH_ONE } from "../../modules/codedetail"

import * as api from "../../lib/api"
import { CodeDetailComponentProps } from "../../interfaces/ComponentProps"
import CodeDetailRead from "../../components/codedetail/CodeDetailRead"

const CodeDetailReadContainer = ({ groupCode, codeValue, history }: CodeDetailComponentProps) => {
    // 스토어 dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { codeDetail, isLoading } = useSelector(
        ({ codeDetail, loading }: any) => ({
                codeDetail: codeDetail.codeDetail,
                isLoading: loading[FETCH_ONE]
            })
    )

    const onRemove = async () => {
        try {
            await api.removeCodeDetail(groupCode, codeValue)
            alert("삭제가 완료되었습니다.")
            history.push("/codedetail")
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
        dispatch(fetchOne(groupCode, codeValue))
    }, [dispatch, groupCode, codeValue])

    return (
        <CodeDetailRead
            codeDetail={codeDetail}
            isLoading={isLoading}
            onRemove={onRemove}
            groupCode={groupCode}
            codeValue={codeValue}
        />
    )
}

export default withRouter(CodeDetailReadContainer)