import React from "react"
import Footer from "../components/common/Footer"
import HomeHeader from "../components/common/HomeHeader"

function SignLayout({ children }: { children: object }) {
    return (
        <div> {/* align center */}
            <HomeHeader />
            {children}
            <Footer />
        </div>
    )
}

export default SignLayout