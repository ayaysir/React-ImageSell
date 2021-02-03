import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { getOriginalFileName, removeAttach } from "./PdsUtil"

function PdsRegisterForm({ attachments, onRegister, onAddAttach, onRemoveAttach }: any) {

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

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(itemName, description)
    }, [itemName, description, onRegister])

    return (
        <article>
            <h2>공개자료실 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
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
                                            {getOriginalFileName(attachment)}&nbsp;
                                            <span className="btn-cancel" onClick={() => removeAttach(index, onRemoveAttach)}>X</span>
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
                    <button type="submit" className="likebutton success">등록</button>
                    <Link to="/pds" className="likebutton">취소</Link>
                </div>
            </form>
        </article>
    )
}

export default PdsRegisterForm