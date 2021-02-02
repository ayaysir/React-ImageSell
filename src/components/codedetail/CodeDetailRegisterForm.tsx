import React, { FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchGroupCodeList } from "../../lib/api"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeDetailRegisterForm({
    onRegister
}: {
    onRegister: any
}) {
    // 컴포넌트 상태 설정
    const [groupCode, setGroupCode] = useState("")
    const [groupCodes, setGroupCodes] = useState([])
    const [codeValue, setCodeValue] = useState("")
    const [codeName, setCodeName] = useState("")

    // 그룹코드 값의 변경을 처리하는 함수
    const handleChangeGroupCode = useCallback((e) => {
        setGroupCode(e.target.value)
    }, [])

    const handleChangeCodeValue = useCallback((e) => {
        setCodeValue(e.target.value)
    }, [])

    const handleChangeCodeName = useCallback((e) => {
        setCodeName(e.target.value)
    }, [])

    // 폼 submit 이벤트 처리
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(groupCode, codeValue, codeName)
    }, [groupCode, codeValue, codeName, onRegister])

    // 그룹코드 목록 가져오기
    const getGroupCodeList = async () => {
        try {
            const response = await fetchGroupCodeList()
            setGroupCodes(response.data)
        } catch(err) {
            throw err
        }
    }

    // 마운트될 때 그룹코드 목록을 가져옴
    useEffect(() => {
        getGroupCodeList()
    }, [])

    // 코드 등록 폼 화면 표시
    return (
        <article>
            <h2>코드 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td>
                                <select value={groupCode} onChange={handleChangeGroupCode}>
                                    {groupCodes.map((groupCode: any) => (
                                        <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>코드값</td>
                            <td><input type="text" value={codeValue} onChange={handleChangeCodeValue} /></td>
                        </tr>
                        <tr>
                            <td>코드명</td>
                            <td><input type="text" value={codeName} onChange={handleChangeCodeName} /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/codedetail">취소</Link>
                </div>
            </form>
        </article>
    )
}
export default CodeDetailRegisterForm
