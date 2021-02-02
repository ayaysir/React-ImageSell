import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CodeDetailList from "../../components/codedetail/CodeDetailList"
import { fetchList, FETCH_LIST } from "../../modules/codedetail"

const CodeDetailListContainer = () => {
    // 스토어 dispatch 사용 가능
    const dispatch = useDispatch()

    // 스토어 상태 조회
    const { codeDetails, isLoading } = useSelector(
        ({ codeDetail, loading }: any) => {
            // console.log(loading)
            return ({
                codeDetails: codeDetail.codeDetails,
                isLoading: loading[FETCH_LIST]
            })
        }
    )

    // 마운트될 때 코드 목록을 가져옴
    useEffect(() => {
        dispatch(fetchList())
    }, [dispatch])

    return <CodeDetailList codeDetails={codeDetails} isLoading={isLoading} />
}
export default CodeDetailListContainer