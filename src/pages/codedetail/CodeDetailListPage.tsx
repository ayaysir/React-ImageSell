import React from "react"
import CodeDetailListContainer from "../../containers/codedetail/CodeDetailListContainer"
import MainLayout from "../../layout/MainLayout"

function CodeDetailListPage() {
    // 메인 레이아웃 적용
    return (
        <MainLayout>
            <CodeDetailListContainer />
        </MainLayout>
    )
}

export default CodeDetailListPage