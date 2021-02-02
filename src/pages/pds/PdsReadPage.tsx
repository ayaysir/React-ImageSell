import PdsReadContainer from "../../containers/pds/PdsReadContainer";
import MainLayout from "../../layout/MainLayout";

function PdsReadPage({ match }: any) {

    const { itemId } = match.params

    return(
        <MainLayout>
            <PdsReadContainer itemId={itemId} />
        </MainLayout>
    )
}

export default PdsReadPage