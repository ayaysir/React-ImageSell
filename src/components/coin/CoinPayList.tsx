import React from "react"

function CoinPayList({ payCoins, isLoading }: any) {
    return (
        <article>
            <h2>구매 내역</h2>
            {isLoading && "로딩중..."}
            {!isLoading && payCoins && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th align="center">번호</th>
                                <th align="center">상품명</th>
                                <th align="center">구매금액</th>
                                <th align="center">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!payCoins.length && (
                                <tr>
                                    <td colSpan={4}>List is empty.</td>
                                </tr>
                            )}
                            {!!payCoins.length && payCoins.map((payCoin: any) => (
                                <tr key={payCoin.historyNo}>
                                    <td align="center">{payCoin.historyNo}</td>
                                    <td align="center">{payCoin.itemName}</td>
                                    <td align="left">{payCoin.amount}</td>
                                    <td align="center">{payCoin.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </article>
    )
}

export default CoinPayList