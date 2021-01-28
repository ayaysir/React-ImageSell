import { useState, useCallback, useEffect, FormEvent } from "react"
import { Link } from "react-router-dom"
import { fetchJobCodeList } from "../../lib/api"

function SignUpForm({ onSignUp }: { onSignUp: any }) {
    // 컴포넌트 상태 설정
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [job, setJob] = useState("")
    const [jobCodes, setJobCodes] = useState([])

    // 회원정보 변경을 처리하는 함수
    const handleChangeUserId = useCallback((e: any) => {
        setUserId(e.target.value)
    }, [])

    const handleChangePassword = useCallback((e: any) => {
        setPassword(e.target.value)
    }, [])

    const handleChangeUserName = useCallback((e: any) => {
        setUserName(e.target.value)
    }, [])

    const handleChangeJob = useCallback((e: any) => {
        setJob(e.target.value)
    }, [])

    // handle form submit event
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onSignUp(userId, userName, password, job)
    }, [userId, userName, password, job, onSignUp])
    
    // get job code list
    const getJobCodeList = async () => {
        try {
            const response = await fetchJobCodeList()
            setJobCodes(response.data)          
        } catch (error) {
            throw error
        }
    }

    // get job code list in mounting process
    useEffect(() => {
        getJobCodeList()
    }, [])

    return (
        <div data-align="center">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
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
                            <td>사용자명</td>
                            <td>
                                <input 
                                    type="text" 
                                    value={userName} 
                                    onChange={handleChangeUserName} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>직업</td>
                            <td>
                                <select onChange={handleChangeJob}>
                                    {jobCodes.map((jobCode: any) => (
                                        <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit">회원가입</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <p><Link to="/signin">로그인</Link></p>
        </div>
    )
}

export default SignUpForm