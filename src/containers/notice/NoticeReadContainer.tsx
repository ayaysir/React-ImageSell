import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { NoticeNNOProps } from "../../@types/BoardInfo"
import NoticeRead from "../../components/notice/NoticeRead"
import { removeNotice } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/notice"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"
import httpStatusHandler from "../../util/httpStatusHandler"

const NoticeReadContainer = ({ noticeNo, history }: NoticeNNOProps) => {
    const dispatch = useDispatch()

    const { notice, isLoading, isAdmin } = useSelector((state: any) => ({
        notice: state.notice.notice,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: hasRoleAdmin(state)
    }))

    const onRemove = async () => {
        try {
            await removeNotice(noticeNo)
            alert("삭제가 완료되었습니다.")
            history.push(`/notice`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(noticeNo))
    }, [dispatch, noticeNo])

    return (
        <NoticeRead
            notice={notice}
            isLoading={isLoading}
            noticeNo={noticeNo}
            onRemove={onRemove}
            isAdmin={isAdmin}
        />

    )
}

export default withRouter(NoticeReadContainer)