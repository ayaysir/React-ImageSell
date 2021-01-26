import React, { useState, useCallback } from "react"

// 등록 처리 함수를 컴포넌트 속성으로 전달받음
function AdminSetupForm({ onRegister }: { onRegister: Function }) {
    // console.log(typeof onRegister, onRegister)

    // 컴포넌트 상태 설정
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")

    // 회원아이디의 변경을 처리하는 함수
    const handleChangeUserId = useCallback(e => {
        setUserId(e.target.value)
    }, [])

    // 비밀번호의 변경을 처리하는 함수
    const handleChangePassword = useCallback(e => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }, [])

    // 사용자명의 변경을 처리하는 함수
    const handleChangeUserName = useCallback(e => {
        setUserName(e.target.value)
    }, [])

    // 폼 submit 이벤트 처리
    const handleSubmit = useCallback(e => {
        e.preventDefault()
        onRegister(userId, userName, password)
    }, [userId, userName, password, onRegister])

    // 회원등록 폼 화면 표시
    return(
        <div> {/* align center */}
            <h2>최초관리자 등록</h2>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>관리자 아이디</td>
                            <td>
                                <input
                                    type="text"
                                    value={userId}
                                    onChange={handleChangeUserId}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>관리자 이름</td>
                            <td>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={handleChangeUserName}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    )

}

export default AdminSetupForm