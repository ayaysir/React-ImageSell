import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PdsList from "../../components/pds/PdsList"
import { fetchList, FETCH_LIST } from "../../modules/pds"
import { isAdmin as hasRoleAdmin } from "../../modules/selector"

const PdsListContainer = () => {
    // 스토어 Dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { pdsItems, isLoading, isAdmin } = useSelector((state: any) => ({
        pdsItems: state.pds.pdsItems,
        isLoading: state.loading[FETCH_LIST],
        isAdmin: hasRoleAdmin(state)
    }))

    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return (
        <PdsList
            pdsItems={pdsItems}
            isLoading={isLoading}
            isAdmin={isAdmin}
        />
    )
}

export default PdsListContainer