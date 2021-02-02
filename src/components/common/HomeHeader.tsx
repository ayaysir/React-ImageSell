import React from "react"
import { Link } from "react-router-dom"

// 로그인 레이아웃 템플릿의 헤더영역 표시
function HomeHeader() {
    return (
        <header className="title-div"> {/* algin center */}
            <Link to="/">&lt; 홈으로 돌아가기</Link>
        </header>
    )
}

export default HomeHeader