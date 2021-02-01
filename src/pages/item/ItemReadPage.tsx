import ItemReadContainer from "../../containers/item/ItemReadContainer";
import MainLayout from "../../layout/MainLayout";

function ItemReadPage({ match }: any) {

    const { itemId } = match.params

    return(
        <MainLayout>
            <ItemReadContainer itemId={itemId} />
        </MainLayout>
    )
}

export default ItemReadPage