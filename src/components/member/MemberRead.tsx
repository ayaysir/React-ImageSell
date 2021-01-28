import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MemberReadInfo } from "../../@types/MemberInfo"
import { fetchJobCodeList } from "../../lib/api"

function MemberRead({ member, isLoading, userNo, onRemove }: MemberReadInfo) {

    const [jobCodes, setJobCodes] = useState([])

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

    const doNothing = () => { }

    return (
        <div data-align="center">
            <h2>회원 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && member && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input value={member.userNo} type="text" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input value={member.userId} type="text" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>사용자명</td>
                                <td>
                                    <input value={member.userName} type="text" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>직업</td>
                                <td>
                                    <select value={member.job} onChange={doNothing}>
                                        {jobCodes.map((jobCode: any) => (
                                            <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한 - 1</td>
                                <td>
                                    <select value={member.authList[0] && member.authList[0].auth} onChange={doNothing}>
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
                                    <select value={member.authList[1] && member.authList[1].auth} onChange={doNothing}>
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
                                    <select value={member.authList[2] && member.authList[2].auth} onChange={doNothing}>
                                        <option value="">=== 선택해 주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/member/edit/${userNo}`}>편집</Link>
                    <button onClick={onRemove}>삭제</button>
                    <Link to={`/member/`}>목록</Link>
                </>
            )}
        </div>
    )
}

export default MemberRead