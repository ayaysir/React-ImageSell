import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { PdsIIDProps } from "../../@types/PdsInfo"
import PdsModifyForm from "../../components/pds/PdsModifyForm"
import * as api from "../../lib/api"
import { addAttach, fetchAttachList, fetchOne, FETCH_ONE, removeAttach, resetAttach } from "../../modules/pds"
import httpStatusHandler from "../../util/httpStatusHandler"

const PdsModifyContainer = ({ itemId, history }: PdsIIDProps) => {
    // 스토어 Dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { pdsItem, attachments, isLoading, } = useSelector(({ pds, loading }: any) => ({
        pdsItem: pds.pdsItem,
        attachments: pds.attachments,
        isLoading: loading[FETCH_ONE]
    }))

    const onModify = async (itemId: number, itemName: string, description: string) => {
        const itemObject = {
            itemId,
            itemName,
            description,
            files: attachments
        }

        try {
            await api.modifyPds(itemId, itemObject)
            alert("수정이 완료되었습니다.")
            history.push(`/pds/read/${itemId}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    // 공개자료파일 첨부
    const onAddAttach = async (file: File) => {
        try {
            let formData = new FormData()
            formData.append("file", file)
            const response = await api.addAttach(formData)
            const attach = response.data
            dispatch(addAttach(attach))
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    // 선택한 공개자료파일 삭제
    const onRemoveAttach = (index: number) => {
        dispatch(removeAttach(index))
    }

    // 첨부파일 목록 가져오기
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
        <PdsModifyForm
            pdsItem={pdsItem}
            attachments={attachments}
            isLoading={isLoading}
            onModify={onModify}
            onAddAttach={onAddAttach}
            onRemoveAttach={onRemoveAttach}
        />

    )
}

export default withRouter(PdsModifyContainer)