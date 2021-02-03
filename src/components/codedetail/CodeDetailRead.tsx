import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchGroupCodeList } from "../../lib/api"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeDetailRead({
    codeDetail,
    isLoading,
    groupCode,
    onRemove,
    codeValue
}: {
    codeDetail: any;
    isLoading: boolean;
    groupCode: string;
    onRemove: any;
    codeValue: any;
}) {

    // 컴포넌트 상태 설정
    const [groupCodes, setGroupCodes] = useState([])

    // 그룹코드 목록 가져오기
    const getGroupCodeList = async () => {
        try {
            const response = await fetchGroupCodeList()
            setGroupCodes(response.data)
        } catch(err) {
            throw err
        }
    }

    // 마운트될 때 그룹코드 목록을 가져옴
    useEffect(() => {
        getGroupCodeList()
    }, [])

    // 코드 상세보기 화면 표시
    return (
        <article>
            <h2>코드 상세 보기</h2>
            {isLoading && "...로딩중..."}
            {/* {console.log(codeDetail)} */}
            {!isLoading && codeDetail && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>그룹코드</td>
                                <td>    
                                    <select value={codeDetail.groupCode} disabled >
                                        {groupCodes.map((groupCode: any) => (
                                            <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>코드값</td>
                                <td>
                                    <input type="text" value={codeDetail.codeValue} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>코드명</td>
                                <td>
                                    <input type="text" value={codeDetail.codeName} readOnly />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/codedetail/edit/${groupCode}/${codeValue}`} className="likebutton">편집</Link>
                    <button onClick={onRemove} className="likebutton danger">삭제</button>
                    <Link to={`/codedetail/`} className="likebutton">목록</Link>
                </>
            )}
        </article>
    )
}
export default CodeDetailRead
