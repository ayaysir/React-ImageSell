import React from "react"
import Footer from "../components/common/Footer"
import MainHeaderContainer from "../containers/common/MainHeaderContainer"
import MenuBarContainer from "../containers/common/MenuBarContainer"

function MainLayout({ children }: { children: any }) {
    // console.log(typeof children)
    return (
        <div className="container">
            <MainHeaderContainer />
            <MenuBarContainer />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout