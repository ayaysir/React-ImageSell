import React, { useCallback, useState } from "react"
import { Link } from "react-router-dom"

// 로그인 폼 구성
function SignInForm({ onSignIn }: { onSignIn: Function }) {
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeUserId = useCallback(e => {
        setUserId(e.target.value)
    }, [])

    const handleChangePassword = useCallback(e => {
        setPassword(e.target.value)
    }, [])

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        onSignIn(userId, password)
    }, [userId, password, onSignIn])

    return (
        <article> {/*  align="center" */}
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input type="text" value={userId} onChange={handleChangeUserId}/>
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input type="password" value={password} onChange={handleChangePassword}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit" className="likebutton">로그인</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {/* 회원가입 링크 */}
            <p><Link to="/signup">회원가입</Link></p>
        </article>
    )
}

export default SignInForm