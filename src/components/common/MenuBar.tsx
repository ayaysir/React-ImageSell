import React from "react"
import { Link } from "react-router-dom"

function MenuBar({ isAuthorized, isAdmin }: { isAuthorized: boolean; isAdmin: boolean }) {
    return (
        <div data-align="center">
            <table>
                <tbody>
                    <tr>
                        {/* 로그인한 사용자이고 관리자 */}
                        {isAuthorized && isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                                <td width="120"><Link to="/codegroup">코드그룹 관리</Link></td>
                                <td width="120"><Link to="/codedetail">코드 관리</Link></td>
                            </>
                        )}
                        {/* 로그인한 사용자이고 관리자 아님 */}
                        {isAuthorized && !isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                            </>
                        )}
                        {/* 로그인 안함 */}
                        {isAuthorized && !isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MenuBar