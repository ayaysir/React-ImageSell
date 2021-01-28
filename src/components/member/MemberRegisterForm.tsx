import React, { FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MemberRegisterInfo } from "../../@types/MemberInfo"
import { fetchJobCodeList } from "../../lib/api"

function MemberRegisterForm({ onRegister }: MemberRegisterInfo) {

    const [userId, setUserId] = useState([])
    const [password, setPassword] = useState([])
    const [userName, setUserName] = useState([])
    const [job, setJob] = useState([])
    const [jobCodes, setJobCodes] = useState([])

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

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(userId, userName, password, job)
    }, [userId, userName, password, job, onRegister])

    const getJobCodeList = async () => {
        try {
            const response = await fetchJobCodeList()
            setJobCodes(response.data)
        } catch (err) {
            throw err
        }
    }

    useEffect(() => {
        getJobCodeList()
    }, [])

    return (
        <div data-align="center">
            <h2>회원 등록</h2>
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
                                <select value={job} onChange={handleChangeJob}>
                                    {jobCodes.map((jobCode: any) => (
                                        <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/member">취소</Link>
                </div>
            </form>

        </div>
    )
}

export default MemberRegisterForm