import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { ItemIIDProps } from "../../@types/ItemInfo"
import ItemModifyForm from "../../components/item/ItemModifyForm"
import * as api from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/item"
import httpStatusHandler from "../../util/httpStatusHandler"

const ItemModifyContainer = ({ itemId, history }: ItemIIDProps) => {
    const dispatch = useDispatch()

    const { item, isLoading } = useSelector(({item, loading}: any) => ({
        item: item.item,
        isLoading: loading[FETCH_ONE],
    }))

    const onModify = async (itemId: number, itemName: string, price: any, description: string, file: File, previewFile: File) => {
        const itemObject = {
            itemId: itemId,
            itemName: itemName,
            price: price,
            description: description
        }

        let formData: FormData = new FormData()

        formData.append("file", file)
        formData.append("file2", previewFile)
        formData.append("item", JSON.stringify(itemObject))

        try {
            await api.modifyItem(itemId, formData)
            alert("수정이 완료되었습니다.")
            history.push(`/item/read/${itemId}`)
        } catch(err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(itemId))
    }, [dispatch, itemId])

    return (
        <ItemModifyForm
            item={item}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
}

export default withRouter(ItemModifyContainer)