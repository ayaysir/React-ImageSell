import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { NoticeNNOProps } from "../../@types/BoardInfo"
import NoticeModifyForm from "../../components/notice/NoticeModifyForm"
import { modifyNotice } from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/notice"
import httpStatusHandler from "../../util/httpStatusHandler"

const NoticeModifyContainer = ({ noticeNo, history }: NoticeNNOProps) => {
    const dispatch = useDispatch()

    const { notice, isLoading } = useSelector(({ notice, loading }: any) => ({
        notice: notice.notice,
        isLoading: loading[FETCH_ONE]
    }))

    const onModify = async (noticeNo: number, title: string, content: string) => {
        try {
            await modifyNotice(noticeNo, title, content)
            alert("수정이 완료되었습니다.")
            history.push(`/notice/read/${noticeNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(noticeNo))
    }, [dispatch, noticeNo])

    return (
        <NoticeModifyForm
            notice={notice}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
}

export default withRouter(NoticeModifyContainer)