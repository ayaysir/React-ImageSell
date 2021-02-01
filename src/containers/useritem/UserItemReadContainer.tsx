import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchOne, FETCH_ONE } from "../../modules/useritem"
import UserItemRead from "../../components/useritem/UserItemRead"

const UserItemReadContainer = ({ userItemNo }: any) => {
    const dispatch = useDispatch()

    const { userItem, isLoading } = useSelector(({ useritem, loading }: any) => ({
        userItem: useritem.userItem,
        isLoading: loading[FETCH_ONE],
    }))

    useEffect(() => {
        dispatch(fetchOne(userItemNo))
    }, [dispatch, userItemNo])

    return (
        <UserItemRead
            userItem={userItem}
            isLoading={isLoading}
        />
    )
}

export default UserItemReadContainer