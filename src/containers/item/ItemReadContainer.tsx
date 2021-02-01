import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { ItemIIDProps } from "../../@types/ItemInfo"
import * as api from "../../lib/api"
import { fetchOne, FETCH_ONE } from "../../modules/item"
import httpStatusHandler from "../../util/httpStatusHandler"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"
import ItemRead from "../../components/item/ItemRead"

const ItemReadContainer = ({ itemId, history }: ItemIIDProps) => {
    const dispatch = useDispatch()

    const { item, isLoading, isAdmin } = useSelector((state: any) => ({
        item: state.item.item,
        isLoading: state.loading[FETCH_ONE],
        isAdmin: hasRoleAdmin(state)
    }))

    const onRemove = async () => {
        try {
            await api.removeItem(itemId)
            alert("삭제가 완료되었습니다.")
            history.push(`/item`)
        } catch(err) {
            httpStatusHandler(err, history)
        }
    }

    useEffect(() => {
        dispatch(fetchOne(itemId))
    }, [dispatch, itemId])

    return (
        <ItemRead
            item={item}
            isLoading={isLoading}
            itemId={itemId}
            onRemove={onRemove}
            isAdmin={isAdmin}
        />
    )
}

export default withRouter(ItemReadContainer)