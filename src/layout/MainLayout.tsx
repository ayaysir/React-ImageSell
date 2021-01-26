import React from "react"
import MenuBar from "../components/common/MenuBar"
import Footer from "../components/common/Footer"
import MainHeaderContainer from "../containers/common/MainHeaderContainer"

function MainLayout({ children }: { children: any }) {
    // console.log(typeof children)
    return (
        <div>
            <MainHeaderContainer />
            <MenuBar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout