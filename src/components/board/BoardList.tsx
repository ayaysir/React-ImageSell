import { Link } from "react-router-dom"

function BoardList({ boards, isLoading }: any ) {

    return(
        <article>
            <h2>게시판 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && boards && (
                <>
                    <div className="upside-button-area">
                        <Link to="/board/create" className="likebutton">새로 만들기</Link>
                    </div>
                    <table className="table-board">
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
                                    <td align="center">{board.writer}</td>
                                    <td align="center">{board.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
    )
}

export default BoardList