import React from "react"
import { Link } from "react-router-dom"
import "./common.scss"

function MenuBar({ isAuthorized, isAdmin }: { isAuthorized: boolean; isAdmin: boolean }) {
    return (
        <nav data-align="center" className="div-menu-bar">
            <table>
                <tbody>
                    <tr>
                        <td width="120"><h3 className="shop-title"><Link className="menu" to="/">ImageShop</Link></h3></td>
                        <td width="120"><Link className="menu" to="/">홈</Link></td>
                        {/* 로그인한 사용자이고 관리자 */}
                        {isAuthorized && isAdmin && (
                            <>
                                <td width="120"><Link className="menu" to="/codegroup" >코드그룹 관리</Link></td>
                                <td width="120"><Link className="menu" to="/codedetail">코드 관리</Link></td>
                                {/* <td width="120"><Link className="menu" to="/member">회원 관리</Link></td> */}
                                <td width="120"><Link className="menu" to="/board">회원 게시판</Link></td>
                                <td width="120"><Link className="menu" to="/notice">공지사항 관리</Link></td>
                                <td width="120"><Link className="menu" to="/item">상품 관리</Link></td>
                                <td width="120"><Link className="menu" to="/pds">공개자료실 관리</Link></td>
                            </>
                        )}
                        {/* 로그인한 사용자이고 관리자 아님 */}
                        {isAuthorized && !isAdmin && (
                            <>
                                <td width="120"><Link className="menu" to="/board">회원 게시판</Link></td>
                                <td width="120"><Link className="menu" to="/notice">공지사항</Link></td>
                                <td width="120"><Link className="menu" to="/item">상품</Link></td>
                                <td width="120"><Link className="menu" to="/coin/create">코인충전</Link></td>
                                <td width="120"><Link className="menu" to="/coin/charge">충전내역</Link></td>
                                <td width="120"><Link className="menu" to="/useritem">구매상품</Link></td>
                                <td width="120"><Link className="menu" to="/coin/pay">구매내역</Link></td>
                                <td width="120"><Link className="menu" to="/pds">공개자료실</Link></td>
                            </>
                        )}
                        {/* 로그인 안함 */}
                        {!isAuthorized && (
                            <>
                                <td width="120"><Link className="menu" to="/board">회원 게시판</Link></td>
                                <td width="120"><Link className="menu" to="/notice">공지사항</Link></td>
                                <td width="120"><Link className="menu" to="/item">상품</Link></td>
                                <td width="120"><Link className="menu" to="/pds">공개자료실 관리</Link></td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        </nav>
    )
}

export default MenuBar