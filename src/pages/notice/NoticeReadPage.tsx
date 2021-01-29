import NoticeReadContainer from "../../containers/notice/NoticeReadContainer";
import MainLayout from "../../layout/MainLayout";

function NoticeReadPage({ match }: any) {

    const { noticeNo } = match.params

    return(
        <MainLayout>
            <NoticeReadContainer noticeNo={noticeNo} />
        </MainLayout>
    )
}

export default NoticeReadPage