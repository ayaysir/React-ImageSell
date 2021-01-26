import React from "react"
import { Link } from "react-router-dom"

function MainHeader({ myInfo, isAuthorized }: { myInfo: any; isAuthorized: boolean}) {
    return (
        <div>
            {isAuthorized && myInfo && <span>{myInfo.userName} 님, 환영합니다.</span>}
            {!isAuthorized && !myInfo && <Link to="/signin">로그인</Link>}
        </div>
    )
}

export default MainHeader