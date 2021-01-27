import React from "react"
import CodeGroupListContainer from "../../containers/codegroup/CodeGroupListContainer"
import MainLayout from "../../layout/MainLayout"

function CodeGroupListPage() {
    // 메인 레이아웃 적용
    return (
        <MainLayout>
            <CodeGroupListContainer />
        </MainLayout>
    )
}

export default CodeGroupListPage