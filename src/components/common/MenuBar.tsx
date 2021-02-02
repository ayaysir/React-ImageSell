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
                                <td width="120"><Link to="/member">회원 관리</Link></td>
                                <td width="120"><Link to="/board">회원 게시판</Link></td>
                                <td width="120"><Link to="/notice">공지사항 관리</Link></td>
                                <td width="120"><Link to="/item">상품 관리</Link></td>
                                <td width="120"><Link to="/pds">공개자료실 관리</Link></td>
                            </>
                        )}
                        {/* 로그인한 사용자이고 관리자 아님 */}
                        {isAuthorized && !isAdmin && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                                <td width="120"><Link to="/board">회원 게시판</Link></td>
                                <td width="120"><Link to="/notice">공지사항</Link></td>
                                <td width="120"><Link to="/item">상품</Link></td>
                                <td width="120"><Link to="/coin/create">코인충전</Link></td>
                                <td width="120"><Link to="/coin/charge">충전내역</Link></td>
                                <td width="120"><Link to="/useritem">구매상품</Link></td>
                                <td width="120"><Link to="/coin/pay">구매내역</Link></td>
                                <td width="120"><Link to="/pds">공개자료실</Link></td>
                            </>
                        )}
                        {/* 로그인 안함 */}
                        {!isAuthorized && (
                            <>
                                <td width="120"><Link to="/">홈</Link></td>
                                <td width="120"><Link to="/board">회원 게시판</Link></td>
                                <td width="120"><Link to="/notice">공지사항</Link></td>
                                <td width="120"><Link to="/item">상품</Link></td>
                                <td width="120"><Link to="/pds">공개자료실 관리</Link></td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MenuBar