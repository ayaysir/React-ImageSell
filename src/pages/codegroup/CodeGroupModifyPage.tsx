import React from "react"
import CodeGroupModifyContainer from "../../containers/codegroup/CodeGroupModifyContainer"
import MainLayout from "../../layout/MainLayout"

// match 객체의 params 값 참조
function CodeGroupModifyPage({ match }: { match: any}) {
    const { groupCode } = match.params

    // 메인 레이아웃 적용
    return (
        <MainLayout>
            <CodeGroupModifyContainer groupCode={groupCode} />
        </MainLayout>
    )
}

export default CodeGroupModifyPage