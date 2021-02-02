import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { PdsIIDProps } from "../../@types/PdsInfo"
import * as api from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"
import PdsRead from "../../components/pds/PdsRead"
import { fetchAttachList, fetchOne, FETCH_ONE, resetAttach } from "../../modules/pds"

const PdsReadContainer = ({ itemId, history }: PdsIIDProps) => {
    // 스토어 Dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { pdsItem, attachments, isLoading, isAdmin } = useSelector((state: any) => ({
        pdsItem: state.pds.pdsItem,
        attachments: state.pds.attachments,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: hasRoleAdmin(state)
    }))

    const onRemove = async () => {
        try {
            await api.removePds(itemId)
            alert("삭제가 완료되었습니다.")
            history.push(`/pds`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    // 공개자료파일 첨부파일 목록 조회
    const getAttachList = useCallback(async() => {
        try {
            const response = await api.fetchAttachList(itemId)
            dispatch(fetchAttachList(response.data))
        } catch(err) {
            throw err
        }
    }, [dispatch, itemId])

    useEffect(() => {
        dispatch(fetchOne(itemId))
    }, [dispatch, itemId])

    // 마운트될 때 첨부파일 목록을 가져옴
    useEffect(() => {
        getAttachList()
        return () => {
            dispatch(resetAttach())
        }
    }, [dispatch, getAttachList])
    /*
    useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. 
    만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다.
    그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. 
    cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, 
    deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
    */

    return (
        <PdsRead
            pdsItem={pdsItem}
            attachments={attachments}
            isLoading={isLoading}
            itemId={itemId}
            onRemove={onRemove}
            isAdmin={isAdmin}
        />

    )
}

export default withRouter(PdsReadContainer)