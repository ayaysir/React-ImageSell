import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BoardModifyForm({ board, isLoading, onModify, myInfo }: any ) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // 게시글 소유자 확인
    let isOwn = false
    if(myInfo && board && (myInfo.userId === board.writer)) {
        isOwn = true
    }

    const handleChangeTitle = (e: ChangeEvent) => {
        // console.log(e)
        setTitle((e.target as HTMLInputElement).value)
    }

    const handleChangeContent = (e: ChangeEvent) => {
        setContent((e.target as HTMLInputElement).value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onModify(board.boardNo, title, content)
    }

    useEffect(() => {
        if(board) {
            setTitle(board.title)
            setContent(board.content)
        }
    }, [board])

    return(
        <article>
            <h2>게시판 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && board && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input value={board.boardNo} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>등록일시</td>
                                <td>
                                    <input value={board.regDate} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>작성자</td>
                                <td>
                                    <input value={board.writer} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>제목</td>
                                <td>
                                    <input value={title} type="text" onChange={handleChangeTitle} />
                                </td>
                            </tr>
                            <tr>
                                <td>내용</td>
                                <td>
                                    <textarea 
                                        value={content} 
                                        rows={5} 
                                        onChange={handleChangeContent}
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        {isOwn && (
                            <button type="submit">수정</button>
                        )}
                        <Link to={`/board/read/${board.boardNo}`}>취소</Link>
                    </div>
                </form>
            )}
        </article>
    )
}

export default BoardModifyForm