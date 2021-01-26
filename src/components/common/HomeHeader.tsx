import React from "react"
import { Link } from "react-router-dom"

// 로그인 레이아웃 템플릿의 헤더영역 표시
function HomeHeader() {
    return (
        <div> {/* algin center */}
            <Link to="/">홈</Link>
        </div>
    )
}

export default HomeHeader