import React from "react"
import { Link } from "react-router-dom"

function ItemList({ items, isLoading, isAdmin }: any) {
    return (
        <article>
            <h2>상품 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && items && (
                <>
                    {isAdmin && (
                        <Link to="/item/create">새로 만들기</Link>
                    )}
                    <table className="table-board">
                        <thead>
                            <tr>
                                <th align="center">상품아이디</th>
                                <th align="center">상품명</th>
                                <th align="center">상품가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!items.length && (
                                <tr>
                                    <td colSpan={3}>
                                        List is empty.
                                    </td>
                                </tr>
                            )}
                            {!!items.length && items.map((item: any) => (
                                <tr key={item.itemId}>
                                    <td align="center">{item.itemId}</td>
                                    <td align="left">
                                        <Link to={`/item/read/${item.itemId}`}>{item.itemName}</Link>
                                    </td>
                                    <td align="right">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
        
    )
}

export default ItemList