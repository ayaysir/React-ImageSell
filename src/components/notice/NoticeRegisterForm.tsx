import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"

function NoticeRegisterForm({ onRegister }: any ) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleChangeTitle = (e: ChangeEvent) => {
        setTitle((e.target as HTMLInputElement).value)
    }

    const handleChangeContent = (e: ChangeEvent) => {
        setContent((e.target as HTMLInputElement).value)
    }

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(title, content)
    }, [title, content, onRegister])

    return(
        <article>
            <h2>공지사항 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" value={title} onChange={handleChangeTitle} />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea
                                    rows={5}
                                    value={content}
                                    onChange={handleChangeContent}
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit" className="likebutton success">등록</button>
                    <Link to="/notice" className="likebutton">취소</Link>
                </div>
            </form>
        </article>
    )
}

export default NoticeRegisterForm