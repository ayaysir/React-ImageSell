import { RouteComponentProps, withRouter } from "react-router-dom"
import CoinChargeRegisterForm from "../../components/coin/CoinChargeRegisterForm"
import { chargeCoin } from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const CoinChargeRegisterContainer = ({ history }: RouteComponentProps<any>) => {
    
    const onRegister = async (amount: string) => {
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