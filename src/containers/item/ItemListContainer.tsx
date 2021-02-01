import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemList from "../../components/item/ItemList"
import { fetchList, FETCH_LIST } from "../../modules/item"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"

const ItemListContainer = () => {
    const dispatch = useDispatch()

    const { items, isLoading, isAdmin } = useSelector((state: any) => ({
        items: state.item.items,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: hasRoleAdmin(state)
    }))

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return (
        <ItemList
            items={items}
            isLoading={isLoading}
            isAdmin={isAdmin}
        />
    )
}

export default ItemListContainer