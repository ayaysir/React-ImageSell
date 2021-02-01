import ItemModifyContainer from "../../containers/item/ItemModifyContainer";
import MainLayout from "../../layout/MainLayout";

function ItemModifyPage({ match }: any) {

    const { itemId } = match.params // 대소문자 구별 유의

    return(
        <MainLayout>
            <ItemModifyContainer itemId={itemId} />
        </MainLayout>
    )
}

export default ItemModifyPage