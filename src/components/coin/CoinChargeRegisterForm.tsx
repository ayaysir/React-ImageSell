import React, { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"

function CoinChargeRegisterForm({ onRegister }: any) {

    const [amount, setAmount] = useState("")
    
    const handleChangeAmount = useCallback((e: ChangeEvent) => {
        setAmount((e.target as HTMLInputElement).value)
    }, [setAmount])

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(amount)
    }, [amount, onRegister])

    return (
        <article>
            <h2>코인 충전</h2>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>충전금액</td>
                            <td><input type="number" value={amount} step={10} onChange={handleChangeAmount} /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit" className="likebutton success">충전하기</button>
                    <Link to="/coin/charge" className="likebutton">충전내역</Link>
                </div>
            </form>
        </article>
    )
}

export default CoinChargeRegisterForm