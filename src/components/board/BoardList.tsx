import { Link } from "react-router-dom"

function BoardList({ boards, isLoading }: any ) {

    return(
        <div data-align="center">
            <h2>게시판 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && boards && (
                <>
                    <Link to="/board/create">새로만들기</Link>
                    <table>
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">제목</th>
                                <th align="center">작성자</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!boards.length && (
                                <tr>
                                    <td colSpan={4}>List is emtpy.</td>
                                </tr>
                            )}
                            {!!boards.length && boards.map((board: any) => (
                                <tr key={board.boardNo}>
                                    <td align="center">{board.boardNo}</td>
                                    <td align="left">
                                        <Link to={`/board/read/${board.boardNo}`}>{board.title}</Link>
                                    </td>
                                    <td align="right">{board.writer}</td>
                                    <td align="center">{board.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default BoardList