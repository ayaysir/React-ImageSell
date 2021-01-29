import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { BoardBNOProps } from "../../@types/BoardInfo"
import BoardRead from "../../components/board/BoardRead"
import { removeBoard } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/board"
import httpStatusHandler from "../../util/httpStatusHandler"

const BoardReadContainer = ({ boardNo, history }: BoardBNOProps) => {
    const dispatch = useDispatch()

    const { board, isLoading, myInfo } = useSelector(({ board, loading, auth }: any) => ({
        board: board.board,
        isLoading: loading[FETCH_ONE],
        myInfo: auth.myInfo
    }))

    const onRemove = async () => {
        try {
            await removeBoard(boardNo)
            alert("삭제가 완료되었습니다.")
            history.push(`/board`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(boardNo))
    }, [dispatch, boardNo])

    return (
        <BoardRead
            board={board}
            isLoading={isLoading}
            boardNo={boardNo}
            onRemove={onRemove}
            myInfo={myInfo}
        />

    )
}

export default withRouter(BoardReadContainer)