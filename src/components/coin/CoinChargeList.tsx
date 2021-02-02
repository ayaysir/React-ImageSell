import React from "react"

function CoinChargeList({ chargeCoins, isLoading }: any) {
    return (
        <article>
            <h2>충전 내역</h2>
            {isLoading && "로딩중..."}
            {!isLoading && chargeCoins && (
                <>
                    <table className="table-board">
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">충전금액</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!chargeCoins.length && (
                                <tr>
                                    <td colSpan={3}>List is empty.</td>
                                </tr>
                            )}
                            {/* {console.log(chargeCoins, !!chargeCoins.length)} */}
                            {!!chargeCoins.length && chargeCoins.map((chargeCoin: any) => (
                                <tr key={chargeCoin.historyNo}>
                                    <td align="center">{chargeCoin.historyNo}</td>
                                    <td align="left">{chargeCoin.amount}</td>
                                    <td align="center">{chargeCoin.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
    )
}

export default CoinChargeList