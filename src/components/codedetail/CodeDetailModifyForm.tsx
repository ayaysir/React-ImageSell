import React, { useState, useEffect, FormEvent, useCallback } from "react"
import { Link } from "react-router-dom"
import { fetchGroupCodeList } from "../../lib/api"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeDetailModifyForm({
    codeDetail,
    isLoading,
    onModify
}: {
    codeDetail: any;
    isLoading: boolean;
    onModify: any
}) {
        // 컴포넌트 상태 설정
        const [groupCodes, setGroupCodes] = useState([])
        const [codeValue, setCodeValue] = useState("")
        const [codeName, setCodeName] = useState("")

        // 코드명 값의 변경을 처리하는 함수
        const handleChangeCodeName = (e: any) => {
            setCodeName(e.target.value)
        }

        // 폼 submit 이벤트 처리
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            onModify(codeDetail.groupCode, codeValue, codeName)
        }

        const getGroupCodeList = useCallback(() => {
            const innerFunc = async() => {
                try {
                    const response = await fetchGroupCodeList()
                    setGroupCodes(response.data)
                } catch(err) {
                    throw err
                }
            }
            innerFunc()
        }, [])

        // 마운트될 때 기존의 코드그룹 목록을 가져옴 
        useEffect(() => {
            getGroupCodeList()
        }, [getGroupCodeList])

        // 마운트될 때 기조의 코드값과 코드명을 가져옴
        useEffect(() => {
            if(codeDetail) {
                setCodeValue(codeDetail.codeValue)
                setCodeName(codeDetail.codeName)
            }
        }, [codeDetail])

        // 코드 수정 폼 표시
        return (
            <div data-align="center"> 
                <h2>코드 수정</h2>
                {isLoading && "...로딩중"}
                {!isLoading && codeDetail && (
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>그룹코드</td>
                                    <td>
                                        <select value={codeDetail.groupCode} disabled>
                                            {groupCodes.map((groupCode: any) => (
                                                <option value={groupCode.value} key={groupCode.value}>{groupCode.label}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코드값</td>
                                    <td>
                                        <input type="text" value={codeValue} disabled />
                                    </td>
                                </tr>
                                <tr>
                                    <td>코드명</td>
                                    <td>
                                        <input type="text" value={codeName} onChange={handleChangeCodeName} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <button type="submit">수정</button>
                            <Link to={`/codedetail/read/${codeDetail.groupCode}`}>취소</Link>
                        </div>
                    </form>
                )}
            </div>
        )
}

export default CodeDetailModifyForm