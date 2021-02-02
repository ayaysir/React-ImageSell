import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getOriginalFileName, removeAttach } from "./PdsUtil"

function PdsModifyForm({ pdsItem, attachments, isLoading, onModify, onAddAttach, onRemoveAttach }: any ) {

    const [itemName, setItemName] = useState("")
    const [description, setDescription] = useState("")

    const handleChangeItemName = (e: ChangeEvent) => {
        setItemName((e.target as HTMLInputElement).value)
    }

    const handleChangeDescription = (e: ChangeEvent) => {
        setDescription((e.target as HTMLInputElement).value)
    }

    // 첨부파일 변경 처리 함수
    const handleChangeFile = useCallback((e: ChangeEvent) => {
        onAddAttach((e.target as HTMLInputElement).files![0])
    }, [onAddAttach])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onModify(pdsItem.itemId, itemName, description)
    }

    useEffect(() => {
        if(pdsItem) {
            setItemName(pdsItem.itemName)
            setDescription(pdsItem.description)
        }
    }, [pdsItem])

    return(
        <div data-align="center">
            <h2>공개자료실 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && pdsItem && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>자료번호</td>
                                <td>
                                    <input value={pdsItem.itemId} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>자료명</td>
                                <td>
                                    <input value={itemName} type="text" onChange={handleChangeItemName} />
                                </td>
                            </tr>
                            <tr>
                                <td>파일</td>
                                <td>
                                    <input onChange={handleChangeFile} type="file" />
                                    <div>
                                        {attachments.map((attachment: string, index: number) => (
                                            <div key={index}>
                                                {getOriginalFileName(attachment)}
                                                <span onClick={() => removeAttach(index, onRemoveAttach)}>X</span>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>자료설명</td>
                                <td>
                                    <textarea 
                                        value={description} 
                                        rows={5} 
                                        onChange={handleChangeDescription}
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/pds/read/${pdsItem.itemId}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default PdsModifyForm