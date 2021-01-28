import React from "react"
import CodeDetailReadContainer from "../../containers/codedetail/CodeDetailReadContainer"
import MainLayout from "../../layout/MainLayout"

function CodeDetailReadPage({ match }: { match: any }) {
    const { groupCode, codeValue } = match.params

    return (
        <MainLayout>
            <CodeDetailReadContainer groupCode={groupCode} codeValue={codeValue} />
        </MainLayout>
    )
}

export default CodeDetailReadPage