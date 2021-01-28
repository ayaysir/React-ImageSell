import React from "react"
import { Link } from "react-router-dom"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeDetailList({ codeDetails, isLoading }: { codeDetails: Array<any>; isLoading: boolean }) {
    // 코드 목록 화면 표시
    return (
        <div> {/* align center */}
            <h2>코드 목록</h2>
            {isLoading && "로딩중"}
            {!isLoading && codeDetails && (
                <>
                    <Link to="/codedetail/create">새로 만들기</Link>
                    <table>
                        <thead>
                            <tr>
                                <th align="center">그룹코드</th>
                                <th align="center">코드값</th>
                                <th align="center">코드명</th>
                                <th align="center">정렬순서</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!codeDetails.length && (
                                <tr>
                                    <td colSpan={3}>List is empty.</td>
                                </tr>
                            )}
                            {console.log(codeDetails)}
                            {!!codeDetails.length ? codeDetails.map((codeDetail: any) => (
                                <tr key={`${codeDetail.groupCode}${codeDetail.codeValue}`}>
                                    <td align="center">{codeDetail.groupCode}</td>
                                    <td align="center">{codeDetail.codeValue}</td>
                                    <td align="left">
                                        <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>
                                            {codeDetail.codeName}
                                        </Link>
                                    </td>
                                    <td align="center">{codeDetail.sortSeq}</td>
                                    <td align="center">{codeDetail.regDate}</td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default CodeDetailList