import PdsModifyContainer from "../../containers/pds/PdsModifyContainer";
import MainLayout from "../../layout/MainLayout";

function PdsModifyPage({ match }: any) {

    const { itemId } = match.params

    return(
        <MainLayout>
            <PdsModifyContainer itemId={itemId} />
        </MainLayout>
    )
}

export default PdsModifyPage