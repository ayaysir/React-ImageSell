import { RouteComponentProps, withRouter } from "react-router-dom"
import CoinChargeRegisterForm from "../../components/coin/CoinChargeRegisterForm"
import { chargeCoin } from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const CoinChargeRegisterContainer = ({ history }: RouteComponentProps<any>) => {
    
    const onRegister = async (amount: string) => {
        // 10만원까지만
        const amountNumber = Number(amount)
        if(amountNumber > 500000) {
            alert("최대 50만원까지 충전 가능합니다.")
            return
        }

        try {
            const response = await chargeCoin(Number(amount))
            alert(response.data)
            history.push("/coin/charge")
        } catch (err) {
            httpStatusHandler(err, history)
        }
    }

    return <CoinChargeRegisterForm onRegister={onRegister} />
}

export default withRouter(CoinChargeRegisterContainer)