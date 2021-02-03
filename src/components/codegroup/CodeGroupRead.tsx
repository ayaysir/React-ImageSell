import React from "react"
import { Link } from "react-router-dom"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeGroupRead({
    codeGroup,
    isLoading,
    groupCode,
    onRemove
}: {
    codeGroup: any;
    isLoading: boolean;
    groupCode: string;
    onRemove: any;
}) {

    // 코드그룹 상세보기 화면 표시
    return (
        <article>
            <h2>코드그룹 상세 보기</h2>
            {isLoading && "...로딩중..."}
            {!isLoading && codeGroup && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>코드그룹코드</td>
                                <td>
                                    <input type="text" value={codeGroup.groupCode} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>코드그룹명</td>
                                <td>
                                    <input type="text" value={codeGroup.groupName} readOnly />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/codegroup/edit/${groupCode}`} className="likebutton">편집</Link>
                    <button onClick={onRemove} className="likebutton danger">삭제</button>
                    <Link to={`/codegroup/`} className="likebutton">목록</Link>
                </>
            )}
        </article>
    )
}
export default CodeGroupRead
