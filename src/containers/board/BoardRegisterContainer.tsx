import { useEffect } from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import BoardRegisterForm from "../../components/board/BoardRegisterForm"
import { writeBoard } from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const BoardRegisterContainer = ({ history }: any) => {

    const { myInfo } = useSelector(({ auth }: any) => ({
        myInfo: auth.myInfo
    }))

    useEffect(() => {
        if(myInfo === null) {
            alert("로그인이 필요합니다.")
            history.push("/signin")
        }
    }, [history, myInfo])
    
    const onRegister = async (title: string, content: string) => {
        try {
            const response = await writeBoard(title, content)
            alert("등록이 완료되었습니다.")
            history.push(`/board/read/${response.data.boardNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    return <BoardRegisterForm onRegister={onRegister} />
}

export default withRouter(BoardRegisterContainer)