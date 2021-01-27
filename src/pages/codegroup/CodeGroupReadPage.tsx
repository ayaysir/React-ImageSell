import React from "react"
import CodeGroupReadContainer from "../../containers/codegroup/CodeGroupReadContainer"
import MainLayout from "../../layout/MainLayout"

function CodeGroupReadPage({ match }: { match: any }) {
    const { groupCode } = match.params

    return (
        <MainLayout>
            <CodeGroupReadContainer groupCode={groupCode} />
        </MainLayout>
    )
}

export default CodeGroupReadPage