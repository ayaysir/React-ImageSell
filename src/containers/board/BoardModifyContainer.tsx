import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { BoardBNOProps } from "../../@types/BoardInfo"
import BoardModifyForm from "../../components/board/BoardModifyForm"
import { modifyBoard } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/board"
import httpStatusHandler from "../../util/httpStatusHandler"

const BoardModifyContainer = ({ boardNo, history }: BoardBNOProps) => {
    const dispatch = useDispatch()

    const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }: any) => ({
        board: board.board,
        isLoading: loading[FETCH_ONE],
        myInfo: auth.myInfo
    }))

    const onModify = async (boardNo: number, title: string, content: string) => {
        try {
            await modifyBoard(boardNo, title, content)
            alert("수정이 완료되었습니다.")
            history.push(`/board/read/${boardNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(boardNo))
    }, [dispatch, boardNo])

    return (
        <BoardModifyForm
            board={board}
            isLoading={isLoading}
            onModify={onModify}
            myInfo={myInfo}
        />
    )
}

export default withRouter(BoardModifyContainer)