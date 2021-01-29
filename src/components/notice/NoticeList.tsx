import { Link } from "react-router-dom"

function NoticeList({ notices, isLoading, isAdmin }: any ) {

    return(
        <div data-align="center">
            <h2>공지사항 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && notices && (
                <>
                    {isAdmin && (
                        <Link to="/notice/create">새로만들기</Link>
                    )}
                    <table>
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">제목</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!notices.length && (
                                <tr>
                                    <td colSpan={3}>List is emtpy.</td>
                                </tr>
                            )}
                            {!!notices.length && notices.map((notice: any) => (
                                <tr key={notice.noticeNo}>
                                    <td align="center">{notice.noticeNo}</td>
                                    <td align="left">
                                        <Link to={`/notice/read/${notice.noticeNo}`}>{notice.title}</Link>
                                    </td>
                                    <td align="right">{notice.writer}</td>
                                    <td align="center">{notice.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default NoticeList