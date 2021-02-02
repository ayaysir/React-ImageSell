// import { useEffect } from "react"
// import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import NoticeRegisterForm from "../../components/notice/NoticeRegisterForm"
import { writeNotice } from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const NoticeRegisterContainer = ({ history }: any) => {
    
    const onRegister = async (title: string, content: string) => {
        try {
            const response = await writeNotice(title, content)
            alert("등록이 완료되었습니다.")
            history.push(`/notice/read/${response.data.noticeNo}`)
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    return <NoticeRegisterForm onRegister={onRegister} />
}

export default withRouter(NoticeRegisterContainer)