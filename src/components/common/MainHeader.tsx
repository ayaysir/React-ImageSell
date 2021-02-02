import React from "react"
import { Link } from "react-router-dom"
import "./common.scss"

function MainHeader({ myInfo, isAuthorized, onLogout }: { myInfo: any; isAuthorized: boolean; onLogout: any}) {
    return (
        <header className="div-main-header">
            {isAuthorized && myInfo && (
                <div>
                    <span>{myInfo.userName} 님, 환영합니다.</span>&nbsp;
                    <button onClick={onLogout}>로그아웃</button>
                </div>
            )}
            {!isAuthorized && !myInfo && <Link to="/signin">로그인</Link>}
        </header>
    )
}

export default MainHeader