import MemberReadContainer from "../../containers/member/MemberReadContainer";
import MainLayout from "../../layout/MainLayout";

export default function MemberReadPage({ match }: { match: any }) {
    const { userNo } = match.params

    return (
        <MainLayout>
            <MemberReadContainer userNo={userNo} />
        </MainLayout>
    )
}