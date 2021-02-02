import { Link } from "react-router-dom"

function PdsList({ pdsItems, isLoading, isAdmin }: any) {

    return(
        <div data-align="center">
            <h2>공개자료실 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && pdsItems && (
                <>
                    {isAdmin && <Link to="/pds/create">새로만들기</Link>}
                    <table>
                        <thead>
                            <tr>
                                <th align="center">자료번호</th>
                                <th align="center">자료명</th>
                                <th align="center">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!pdsItems.length && (
                                <tr>
                                    <td colSpan={3}>List is emtpy.</td>
                                </tr>
                            )}
                            {!!pdsItems.length && pdsItems.map((pdsItem: any) => (
                                <tr key={pdsItem.boardNo}>
                                    <td align="center">{pdsItem.itemId}</td>
                                    <td align="left">
                                        <Link to={`/pds/read/${pdsItem.itemId}`}>{pdsItem.itemName}</Link>
                                    </td>
                                    <td align="right">{pdsItem.viewCnt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default PdsList