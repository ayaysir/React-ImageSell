import { RouteComponentProps, withRouter } from "react-router-dom"
import ItemRegisterForm from "../../components/item/ItemRegisterForm"
import * as api from "../../lib/api"
import httpStatusHandler from "../../util/httpStatusHandler"

const itemRegisterContainer = ({ history }: RouteComponentProps) => {

    const onRegister = async (itemName: string, price: number, description: string, file: File, previewFile: File) => {
        const itemObject = {
            itemName: itemName,
            price: price,
            description: description
        }

        let formData: FormData = new FormData()

        formData.append("file", file)
        formData.append("file2", previewFile)
        formData.append("item", JSON.stringify(itemObject))

        try {
            const response = await api.writeItem(formData)
            alert("등록이 완료되었습니다.")
            history.push(`/item/read/${response.data.itemId}`)
        } catch(err) {
            httpStatusHandler(err, history)
        }
    }
    return (
        <ItemRegisterForm onRegister={onRegister} />
    )
}

export default withRouter(itemRegisterContainer)