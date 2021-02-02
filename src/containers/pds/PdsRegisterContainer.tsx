import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import PdsRegisterForm from "../../components/pds/PdsRegisterForm"
import * as api from "../../lib/api"
import { addAttach, removeAttach } from "../../modules/pds"
import httpStatusHandler from "../../util/httpStatusHandler"

const PdsRegisterContainer = ({ history }: RouteComponentProps<any>) => {
    // 스토어 Dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { attachments } = useSelector((state: any) => ({
        attachments: state.pds.attachments
    }))

    const onRegister = async (itemName: string, description: string) => {
        const itemObject = {
            itemName: itemName,
            description: description,
            files: attachments
        }

        try {
            const response = await api.writePds(itemObject)
            alert("등록이 완료되었습니다.")
            history.push(`/pds/read/${response.data.itemId}`)
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

    return (
        <PdsRegisterForm
            attachments={attachments}
            onRegister={onRegister}
            onAddAttach={onAddAttach}
            onRemoveAttach={onRemoveAttach}
        />
    )
}

export default withRouter(PdsRegisterContainer)