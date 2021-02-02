import React from "react"
import { Link } from "react-router-dom"

// 미리보기 이미지 URL 생성
const previewUrl = (itemId: any) => {
    return (
        `/items/preview?itemId=${itemId}&timestamp=${new Date().getTime()}`
    )
}

function ItemRead({ item, isLoading, itemId, onRemove, isAdmin, onBuy }: any) {

    return (
        <article>
            <h2>상품 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && item && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>상품번호</td>
                                <td><input type="text" value={item.itemId} readOnly /></td>
                            </tr>
                            <tr>
                                <td>상품명</td>
                                <td><input type="text" value={item.itemName} readOnly /></td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td><input type="text" value={item.price} readOnly /></td>
                            </tr>
                            <tr>
                                <td>미리보기파일</td>
                                <td><img src={previewUrl(item.itemId)} alt="" width={200}/></td>
                            </tr>
                            <tr>
                                <td>상품설명</td>
                                <td>
                                    <textarea
                                        rows={5}
                                        value={item.description}
                                        readOnly
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {isAdmin && (
                        <>
                            <Link to={`/item/edit/${itemId}`}>편집</Link>
                            <button onClick={onRemove}>삭제</button>
                        </>
                    )}
                    {!isAdmin && <button onClick={onBuy}>구매</button>}
                    <Link to="/item">목록</Link>
                </>
            )}
        </article>

    )
}

export default ItemRead