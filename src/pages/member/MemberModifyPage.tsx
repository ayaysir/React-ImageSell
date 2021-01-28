import MemberModifyContainer from "../../containers/member/MemberModifyContainer";
import MainLayout from "../../layout/MainLayout";

export default function MemberModifyPage({ match }: { match: any }) {
    const { userNo } = match.params

    return (
        <MainLayout>
            <MemberModifyContainer userNo={userNo} />
        </MainLayout>
    )
}