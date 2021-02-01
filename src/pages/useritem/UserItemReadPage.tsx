import UserItemReadContainer from "../../containers/useritem/UserItemReadContainer";
import MainLayout from "../../layout/MainLayout";

function UserItemReadPage({ match }: any) {
    const { userItemNo } = match.params
    return(
        <MainLayout>
            <UserItemReadContainer userItemNo={userItemNo} />
        </MainLayout>
    )
}

export default UserItemReadPage