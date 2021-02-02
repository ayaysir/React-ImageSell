import React from "react"
import { Link } from "react-router-dom"
import { MemberListInfo } from "../../interfaces/MemberInfo"

function MemberList({ members, isLoading }: MemberListInfo) {
    return (
        <article>
            <h2>회원 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && members && (
                <>
                    <Link to="/member/create">새로 만들기</Link>
                    <table className="table-board">
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">아이디</th>
                                <th align="center">비밀번호</th>
                                <th align="center">사용자명</th>
                                <th align="center">작업</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!members.length && (
                                <tr>
                                    <td colSpan={6}>List is empty.</td>
                                </tr>
                            )}
                            {!!members.length && members.map((member: any) => (
                                <tr key={member.userNo}>
                                    <td align="center">{member.userNo}</td>
                                    <td align="center">
                                        <Link to={`/member/read/${member.userNo}`}>
                                            {member.userId}
                                        </Link>
                                    </td>
                                    <td align="center">{member.userPassword}</td>
                                    <td align="center">{member.userName}</td>
                                    <td align="center">{member.job}</td>
                                    <td align="center">{member.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
    )
}

export default MemberList