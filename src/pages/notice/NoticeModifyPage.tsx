import NoticeModifyContainer from "../../containers/notice/NoticeModifyContainer";
import MainLayout from "../../layout/MainLayout";

function NoticeModifyPage({ match }: any) {

    const { noticeNo } = match.params // 대소문자 구별 유의

    return(
        <MainLayout>
            <NoticeModifyContainer noticeNo={noticeNo} />
        </MainLayout>
    )
}

export default NoticeModifyPage