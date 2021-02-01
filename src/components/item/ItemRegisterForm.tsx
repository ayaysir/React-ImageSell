import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ItemRegisterForm({ onRegister }: any) {

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

    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
        onRegister(itemName, price, description, file, previewFile)
    }, [itemName, price, description, file, previewFile, onRegister])


    return (
        <div data-align="center">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
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
                    <button type="submit">등록</button>
                    <Link to={`/item`}>취소</Link>
                </div>
            </form>

        </div>

    )
}

export default ItemRegisterForm