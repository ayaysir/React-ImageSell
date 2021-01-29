import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"

function BoardRegisterForm({ onRegister }: any ) {

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
        <div data-align="center">
            <h2>게시판 등록</h2>
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
                    <button type="submit">등록</button>
                    <Link to="/board">취소</Link>
                </div>
            </form>
        </div>
    )
}

export default BoardRegisterForm