// 파일명에서 공개자료명 변환 
export const getOriginalFileName = (fileName: string) => {
    const index = fileName.indexOf("_") + 1
    return fileName.substr(index)
}

// TODO: url 분리: 어느 서버에도 적용 가능하게
export const getDownloadURL = (fileName: string) => (`http://localhost:8080/pds/download?fullName=${fileName}`)

 // 선택한 첨부파일 삭제
export const removeAttach = (index: number, onRemoveAttach: Function) => {
    onRemoveAttach(index)
}