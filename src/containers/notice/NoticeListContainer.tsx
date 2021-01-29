import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NoticeList from "../../components/notice/NoticeList"
import { FETCH_LIST, fetchList } from "../../modules/notice"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"

const NoticeListContainer = () => {
    const dispatch = useDispatch()

    const { notices, isLoading, isAdmin } = useSelector((state: any) => ({
        notices: state.notice.notices,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: hasRoleAdmin(state)
    }))

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return <NoticeList notices={notices} isLoading={isLoading} isAdmin={isAdmin} />
}

export default NoticeListContainer