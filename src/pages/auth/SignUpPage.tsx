import React from "react"
import SignUpContainer from "../../containers/auth/SignUpContainer"
import SignLayout from "../../layout/SignLayout"

// 로그인 페이지
function SignUpPage() {
    return (
        <SignLayout>
            <SignUpContainer />
        </SignLayout>
    )
}

export default SignUpPage