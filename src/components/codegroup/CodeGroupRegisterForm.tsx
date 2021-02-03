import React, { FormEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeGroupRegisterForm({
    onRegister
}: {
    onRegister: any
}) {
    // 컴포넌트 상태 설정
    const [groupCode, setGroupCode] = useState("")
    const [groupName, setGroupName] = useState("")

    // 그룹코드 값의 변경을 처리하는 함수
    const handleChangeGroupCode = useCallback((e) => {
        setGroupCode(e.target.value)
    }, [])

    const handleChangeGroupName = useCallback((e) => {
        setGroupName(e.target.value)
    }, [])

    // 폼 submit 이벤트 처리
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(groupCode, groupName)
    }, [groupCode, groupName, onRegister])

    // 코드그룹 등록 폼 화면 표시
    return (
        <article>
            <h2>코드그룹 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td><input type="text" value={groupCode} onChange={handleChangeGroupCode} /></td>
                        </tr>
                        <tr>
                            <td>코드그룹명</td>
                            <td><input type="text" value={groupName} onChange={handleChangeGroupName} /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit" className="likebutton success">등록</button>
                    <Link to="/codegroup" className="likebutton">취소</Link>
                </div>
            </form>
        </article>
    )
}
export default CodeGroupRegisterForm
