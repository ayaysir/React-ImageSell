import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BoardList from "../../components/board/BoardList"
import { FETCH_LIST, fetchList } from "../../modules/board"

const BoardListContainer = () => {
    const dispatch = useDispatch()

    const { boards, isLoading } = useSelector(({ board, loading }: any) => ({
        boards: board.boards,
        isLoading: loading[FETCH_LIST]
    }))

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return <BoardList boards={boards} isLoading={isLoading} />
}

export default BoardListContainer