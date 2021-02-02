import { useCallback } from "react";
import { Link } from "react-router-dom";


function UserItemList({ userItems, isLoading, onDownload }: any) {
    const handleClickDownload = useCallback((userItemNo: any) => {
        onDownload(userItemNo)
    }, [onDownload])

    return(
        <article>
            <h2>구매상품 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && userItems && (
                <>
                    <table className="table-board">
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">상품명</th>
                                <th align="center">상품가격</th>
                                <th align="center">구매일시</th>
                                <th align="center">다운로드</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!userItems.length && (
                                <tr>
                                    <td colSpan={5}>List is empty.</td>
                                </tr>
                            )}
                            {!!userItems.length && userItems.map((userItem: any) => (
                                <tr>
                                    <td align="center">
                                        {userItem.userItemNo}
                                    </td>
                                    <td align="left"><Link to={`/useritem/read/${userItem.userItemNo}`}>{userItem.itemName}</Link></td>
                                    <td align="right">{userItem.price}</td>
                                    <td align="center">{userItem.regDate}</td>
                                    <td align="center">
                                        <span onClick={() => handleClickDownload(userItem.userItemNo)}>DOWNLOAD</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
    )
}

export default UserItemList