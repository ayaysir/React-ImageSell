import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchList, FETCH_LIST } from "../../modules/useritem"
import UserItemList from "../../components/useritem/UserItemList"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { downloadUserItem } from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const UserItemListContainer = ({ history }: RouteComponentProps<any>) => {
    const dispatch = useDispatch()

    const onDownload = async (userItemNo: number) => {
        try {
            const response = await downloadUserItem(userItemNo)

            // 다운로드 기능 구현
            const contentDisposition = response.request.getResponseHeader("Content-Disposition")
            const donwloadFilename = contentDisposition.substring(22, contentDisposition.length - 1)
            const decodedDownloadFilename = decodeURIComponent(escape(donwloadFilename))

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", decodedDownloadFilename)
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    const { userItems, isLoading } = useSelector(({ useritem, loading }: any) => ({
        userItems: useritem.userItems,
        isLoading: loading[FETCH_LIST],
    }))

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return (
        <UserItemList
            userItems={userItems}
            isLoading={isLoading}
            onDownload={onDownload}
        />
    )
}

export default withRouter(UserItemListContainer)