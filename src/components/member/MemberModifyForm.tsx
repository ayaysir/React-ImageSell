
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MemberModifyInfo } from "../../interfaces/MemberInfo"
import { fetchJobCodeList } from "../../lib/api"

function MemberModifyForm({ member, isLoading, onModify }: MemberModifyInfo) {

    const [jobCodes, setJobCodes] = useState([])

    const [userName, setUserName] = useState("")
    const [job, setJob] = useState("")

    const [auth1, setAuth1] = useState("")
    const [auth2, setAuth2] = useState("")
    const [auth3, setAuth3] = useState("")

    const handleChangeUserName = (e: ChangeEvent) => {
        setUserName((e.target as HTMLInputElement).value)
    }

    const handleChangeJob = (e: ChangeEvent) => {
        setJob((e.target as HTMLInputElement).value)
    }

    // 사용자 권한의 변경을 처리하는 함수
    const handleChangeAuth1 = (e: ChangeEvent) => {
        setAuth1((e.target as HTMLInputElement).value)
    }

    const handleChangeAuth2 = (e: ChangeEvent) => {
        setAuth2((e.target as HTMLInputElement).value)
    }

    const handleChangeAuth3 = (e: ChangeEvent) => {
        setAuth3((e.target as HTMLInputElement).value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const userNo = member.userNo

        const userObject = {
            userId: member.userId,
            userPw: member.userPw,
            userName: userName,
            job: job,
            authList: [
                {
                    userNo: userNo,
                    auth: auth1
                },
                {
                    userNo: userNo,
                    auth: auth2
                },
                {
                    userNo: userNo,
                    auth: auth3
                },
            ]
        }

        onModify(member.userNo, userObject)
    }

    const getJobCodeList = async () => {
        try {
            const response = await fetchJobCodeList()
            setJobCodes(response.data)
        } catch (err) {
            throw err
        }
    }

    // 마운트될 때, 작업코드 목록을 가져옴
    useEffect(() => {
        getJobCodeList()
    }, [])

    // 마운트될 때, 기존의 사용자명, 작업코드, 권한을 가져옴
    useEffect(() => {
        if (member) {
            setUserName(member.userName)
            setJob(member.job)

            setAuth1(member.authList[0] && member.authList[0].auth)
            setAuth2(member.authList[1] && member.authList[1].auth)
            setAuth3(member.authList[2] && member.authList[2].auth)
        }
    }, [member])

    return (
        <article>
            <h2>회원 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && member && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input value={member.userNo} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input value={member.userId} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>사용자명</td>
                                <td>
                                    <input value={userName} type="text" onChange={handleChangeUserName} />
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
                            <tr>
                                <td>권한 - 1</td>
                                <td>
                                    <select value={auth1} onChange={handleChangeAuth1}>
                                        <option value="">=== 선택해 주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한 - 2</td>
                                <td>
                                    <select value={auth2} onChange={handleChangeAuth2}>
                                        <option value="">=== 선택해 주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한 - 3</td>
                                <td>
                                    <select value={auth3} onChange={handleChangeAuth3}>
                                        <option value="">=== 선택해 주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/member/read/${member.userNo}`}>취소</Link>
                    </div>
                </form>
            )}
        </article>
    )
}

export default MemberModifyForm