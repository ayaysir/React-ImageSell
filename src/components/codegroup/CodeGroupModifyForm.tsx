import React, { useState, useEffect, FormEvent, ChangeEvent } from "react"
import { Link } from "react-router-dom"

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeGroupModifyForm({
    codeGroup,
    isLoading,
    onModify
}: {
    codeGroup: any;
    isLoading: boolean;
    onModify: any
}) {
        // 컴포넌트 상태 설정
        const [groupName, setGroupName] = useState("")

        // 코드그룹명 값의 변경을 처리하는 함수
        const handleChangeGroupName = (e: ChangeEvent) => {
            setGroupName((e.target as HTMLInputElement).value)
        }

        // 폼 submit 이벤트 처리
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            onModify(codeGroup.groupCode, groupName)
        }

        // 마운트될 때 기존의 코드그룹명을 가져옴
        useEffect(() => {
            if(codeGroup) {
                setGroupName(codeGroup.groupName)
            }
        }, [codeGroup])

        // 코드그룹 수정 폼 표시
        return (
            <article> 
                <h2>코드그룹 수정</h2>
                {isLoading && "...로딩중"}
                {!isLoading && codeGroup && (
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>코드그룹코드</td>
                                    <td>
                                        <input value={codeGroup.groupCode} type="text" disabled />
                                    </td>
                                </tr>
                                <tr>
                                    <td>코드그룹명</td>
                                    <td>
                                        <input type="text" value={groupName} onChange={handleChangeGroupName} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <button type="submit">수정</button>
                            <Link to={`/codegroup/read/${codeGroup.groupCode}`}>취소</Link>
                        </div>
                    </form>
                )}
            </article>
        )
}

export default CodeGroupModifyForm