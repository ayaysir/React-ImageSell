import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ItemModifyForm({ item, isLoading, onModify }: any) {

    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [file, setFile] = useState<File | null>()
    const [previewFile, setPreviewFile] = useState<File | null>()
    const [description, setDescription] = useState("")

    const handleChangeItemName = useCallback((e: ChangeEvent) => {
        setItemName((e.target as HTMLInputElement).value)
    }, [])

    const handleChangePrice = useCallback((e: ChangeEvent) => {
        setPrice((e.target as HTMLInputElement).value)
    }, [])

    const handleChangeFile = useCallback((e: ChangeEvent) => {
        setFile((e.target as HTMLInputElement).files![0])
    }, [])

    const handleChangePreviewFile = useCallback((e: ChangeEvent) => {
        setPreviewFile((e.target as HTMLInputElement).files![0])
    }, [])

    const handleChangeDescription = useCallback((e: ChangeEvent) => {
        setDescription((e.target as HTMLInputElement).value)
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onModify(item.itemId, itemName, price, description, file, previewFile)
    }

    useEffect(() => {
        if (item) {
            setItemName(item.itemName)
            setPrice(item.price)
            setDescription(item.description)
        }
    }, [item])

    return (
        <article>
            <h2>상품 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && item && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>상품번호</td>
                                <td><input type="text" value={item.itemId} disabled /></td>
                            </tr>
                            <tr>
                                <td>상품명</td>
                                <td><input type="text" value={itemName} onChange={handleChangeItemName} /></td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td><input type="number" value={price} onChange={handleChangePrice} step={10} /></td>
                            </tr>
                            <tr>
                                <td>상품파일</td>
                                <td><input type="file" onChange={handleChangeFile} /></td>
                            </tr>
                            <tr>
                                <td>미리보기파일</td>
                                <td><input type="file" onChange={handleChangePreviewFile} /></td>
                            </tr>
                            <tr>
                                <td>상품설명</td>
                                <td>
                                    <textarea
                                        rows={5}
                                        value={description}
                                        onChange={handleChangeDescription}
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/item/read/${item.itemId}`}>취소</Link>
                    </div>
                </form>
            )}
        </article>

    )
}

export default ItemModifyForm