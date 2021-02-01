import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CoinChargeList from "../../components/coin/CoinChargeList"
import { fetchChargeList, FETCH_CHARGE_LIST } from "../../modules/coin"

const CoinChargeListContainer = () => {
    const dispatch = useDispatch()

    const { chargeCoins, isLoading } = useSelector(({ coin, loading }: any) => ({
        chargeCoins: coin.chargeCoins,
        isLoading: loading[FETCH_CHARGE_LIST]
    }))

    useEffect(() => {
        dispatch(fetchChargeList())
    }, [dispatch])

    return <CoinChargeList chargeCoins={chargeCoins} isLoading={isLoading} />
}

export default CoinChargeListContainer