import React from "react"
import CodeDetailModifyContainer from "../../containers/codedetail/CodeDetailModifyContainer"
import MainLayout from "../../layout/MainLayout"

// match 객체의 params 값 참조
function CodeDetailModifyPage({ match }: { match: any }) {
    const { groupCode, codeValue } = match.params

    // 메인 레이아웃 적용
    return (
        <MainLayout>
            <CodeDetailModifyContainer groupCode={groupCode} codeValue={codeValue} />
        </MainLayout>
    )
}

export default CodeDetailModifyPage