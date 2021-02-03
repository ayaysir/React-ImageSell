import { useState, useCallback, FormEvent } from "react"
import { Link } from "react-router-dom"

const defaultPwdStyle = {
    fontSize: "0.8em",
    color: "gray"
}

const checkedPwdStyle = {
    ...defaultPwdStyle,
    color: "green"
}

const uncheckedPwdStyle = {
    ...defaultPwdStyle,
    color: "red"
}



function SignUpForm({ onSignUp }: { onSignUp: Function }) {
    // 컴포넌트 상태 설정
    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [isPwdSame, setPwdSame] = useState(false)

    // const [job, setJob] = useState("")
    // const [jobCodes, setJobCodes] = useState([])

    // 회원정보 변경을 처리하는 함수
    const handleChangeUserId = useCallback((e) => {
        setUserId(e.target.value)
    }, [])

    const handleChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    const handleChangeConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
        
        const confirmPassword = e.target.value
        if(password && confirmPassword) {
            if(password === confirmPassword) {
                setPwdSame(true)
            } else {
                setPwdSame(false)
            }
        }
    }, [password])

    const handleChangeUserName = useCallback((e) => {
        setUserName(e.target.value)
    }, [])

    // handle form submit event
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onSignUp(userId, userName, password, confirmPassword, "")
    }, [userId, userName, password, onSignUp, confirmPassword])


    // const handleChangeJob = useCallback((e) => {
    //     setJob(e.target.value)
    // }, [])
    
    // get job code list
    // const getJobCodeList = async () => {
    //     try {
    //         const response = await fetchJobCodeList()
    //         // setJobCodes(response.data)          
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // // get job code list in mounting process
    // useEffect(() => {
    //     getJobCodeList()
    // }, [])

    return (
        <article>
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
                            <td>비밀번호 확인</td>
                            <td>
                                <input 
                                    type="password" 
                                    value={confirmPassword} 
                                    onChange={handleChangeConfirmPassword} 
                                />
                                <br />
                                <span style={(confirmPassword === "") ? defaultPwdStyle : isPwdSame ? checkedPwdStyle : uncheckedPwdStyle }>
                                    {(confirmPassword === "") && "-- 비밀번호 일치여부 --"}
                                    {(confirmPassword !== "") && isPwdSame && "✓ 일치합니다."}
                                    {(confirmPassword !== "") && !isPwdSame && "✗ 일치하지 않습니다."}
                                </span>
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
                        {/* <tr>
                            <td>직업</td>
                            <td>
                                <select onChange={handleChangeJob}>
                                    {jobCodes.map((jobCode: any) => (
                                        <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr> */}
                        <tr>
                            <td colSpan={2} align="center">
                                <button type="submit" className="likebutton">회원가입</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <p><Link to="/signin">로그인</Link></p>
        </article>
    )
}

export default SignUpForm