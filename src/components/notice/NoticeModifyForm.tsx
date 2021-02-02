import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function NoticeModifyForm({ notice, isLoading, onModify }: any ) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleChangeTitle = (e: ChangeEvent) => {
        // console.log(e)
        setTitle((e.target as HTMLInputElement).value)
    }

    const handleChangeContent = (e: ChangeEvent) => {
        setContent((e.target as HTMLInputElement).value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onModify(notice.noticeNo, title, content)
    }

    useEffect(() => {
        if(notice) {
            setTitle(notice.title)
            setContent(notice.content)
        }
    }, [notice])

    return(
        <article>
            <h2>공지사항 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && notice && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input value={notice.noticeNo} type="text" disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>등록일시</td>
                                <td>
                                    <input value={notice.regDate} type="text" disabled />
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
                        <button type="submit">수정</button>
                        <Link to={`/notice/read/${notice.noticeNo}`}>취소</Link>
                    </div>
                </form>
            )}
        </article>
    )
}

export default NoticeModifyForm