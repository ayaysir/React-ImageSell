import { Link } from "react-router-dom"
import { getDownloadURL, getOriginalFileName } from "./PdsUtil"

function PdsRead({ pdsItem, attachments, isLoading, itemId, onRemove, isAdmin }: any ) {

    return(
        <article>
            <h2>공개자료실 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && pdsItem && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>자료번호</td>
                                <td>
                                    <input type="text" value={pdsItem.itemId} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>자료명</td>
                                <td>
                                    <input type="text" value={pdsItem.itemName} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>파일</td>
                                <td>
                                    <div>
                                        {attachments.map((attachment: string, index: number) => (
                                            <div key={index}>
                                                <a href={getDownloadURL(attachment)} download>{getOriginalFileName(attachment)}</a>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>자료설명</td>
                                <td>
                                    <textarea value={pdsItem.description} readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        {isAdmin && (
                            <>
                                <Link to={`/pds/edit/${itemId}`}>편집</Link>
                                <button onClick={onRemove}>삭제</button>
                            </>
                        )}
                        <Link to={`/pds`}>목록</Link>
                    </div>
                </>
            )}
        </article>
    )
}

export default PdsRead