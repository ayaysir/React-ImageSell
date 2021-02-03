import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Home from "../components/Home"
import { fetchStatus, FETCH_STATUS } from "../modules/home"

const HomeContainer = () => {

    // 스토어 Dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { isApiOpened, isLoading } = useSelector((state: any) => ({
        isApiOpened: (!!state.home.success),
        isLoading: state.loading[FETCH_STATUS]
    }))

    useEffect(() => {
        dispatch(fetchStatus())
        
    }, [dispatch])



    return <Home isApiOpened={isApiOpened} isLoading={isLoading} />
    
}

export default HomeContainer