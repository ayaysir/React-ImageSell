import React from "react"
import MainHeader from "../components/common/MainHeader"
import MenuBar from "../components/common/MenuBar"
import Footer from "../components/common/Footer"

function MainLayout({ children }: { children: object }) {
    console.log(typeof children)
    return (
        <div>
            <MainHeader />
            <MenuBar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout