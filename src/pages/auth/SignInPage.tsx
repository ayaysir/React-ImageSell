import React from "react"
import SingInForm from "../../components/auth/SignInForm"
import SignLayout from "../../layout/SignLayout"

// 로그인 페이지
function SignInPage() {
    return (
        <SignLayout>
            <SingInForm />
        </SignLayout>
    )
}

export default SignInPage