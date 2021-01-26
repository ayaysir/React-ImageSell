import React from "react"
import SignInContainer from "../../containers/auth/SignInContainer"
import SignLayout from "../../layout/SignLayout"

// 로그인 페이지
function SignInPage() {
    return (
        <SignLayout>
            <SignInContainer />
        </SignLayout>
    )
}

export default SignInPage