import { Link } from "react-router-dom"

// 부모컴포넌트에서 컴포넌트 속성으로 수신
const pictureUrl = (userItem: any) => {
    return (
        `/items/display?itemId=${userItem.itemId}&timestamp=${new Date().getTime()}`
    )
}

function UserItemRead({ userItem, isLoading }: any ) {

    return(
        <article>
            <h2>구매상품 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && userItem && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>상품번호</td>
                                <td>
                                    <input type="text" value={userItem.userItemNo} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>상품명</td>
                                <td>
                                    <input type="text" value={userItem.itemName} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td>
                                    <input type="text" value={userItem.price} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>상품파일</td>
                                <td>
                                    <img src={pictureUrl(userItem)} alt=""/>
                                </td>
                            </tr>
                            <tr>
                                <td>상품설명</td>
                                <td>
                                    <textarea value={userItem.description} readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <Link to={`/useritem`}>목록</Link>
                    </div>
                </>
            )}
        </article>
    )
}

export default UserItemRead