import client from "./client"

export const adminSetup = (userId: number, userName: string, userPassword: string) => client.post("/users/setup", {
    userId,
    userName,
    userPw: userPassword
})

export const signIn = (userId: string, password: string) => client.post(`/api/authenticate?username=${userId}&password=${password}`)

export const getMyInfo = () => client.get("/users/myinfo")

export const fetchCodeGroup = (groupCode: any) => client.get(`/codegroups/${groupCode}`)
export const fetchCodeGroupList = () => client.get(`/codegroups`)
export const modifyCodeGroup = (groupCode: any, groupName: string) => client.put(`/codegroups/${groupCode}`, { groupName })
export const writeCodeGroup = (groupCode: any, groupName: string) => client.post(`/codegroups`, {  groupCode, groupName })
export const removeCodeGroup = (groupCode: any) => client.delete(`/codegroups/${groupCode}`)

export const fetchCodeDetail = ({ groupCode, codeValue }: { groupCode:any; codeValue:any }) => client.get(`/codedetails/${groupCode}/${codeValue}`)
export const fetchCodeDetailList = () => client.get(`/codedetails/`)
export const modifyCodeDetail = (
    groupCode: any, 
    codeValue: any, 
    codeName: any) => client.put(`/codedetails/${groupCode}/${codeValue}`, { codeValue, codeName })
export const writeCodeDetail = (
    groupCode: any, 
    codeValue: any, 
    codeName: any) => client.post(`/codedetails/`, { groupCode, codeValue, codeName })
export const removeCodeDetail = (
    groupCode: any, 
    codeValue: any) => client.delete(`/codedetails/${groupCode}/${codeValue}`)

// 그룹코드 목록 획득 서버 API 호출 함수
export const fetchGroupCodeList = () => client.get("/codes/codeGroup")

// 회원가입 API 
export const signUp = (userId: string, userName: string, userPassword: string, job: string) => (
    client.post("/users", { userId, userName, userPw: userPassword, job: "00" })
)

// 직업코드 목록 조회
export const fetchJobCodeList = () => client.get("/codes/job")

// 회원정보
export const fetchMember = (userNo: number) => client.get(`/users/${userNo}`)
export const fetchMemberList = () => {
    const res = client.get("/users")
    console.log(res)
}
export const modifyMember = (userNo: number, payload: any) => client.put(`/users/${userNo}`, payload)
export const writeMember = (userId: string, userName: string, userPassword: string, job: string) => (
    client.post(`/users`, { 
        userId: userId, 
        userName: userName, 
        userPw: userPassword, 
        job: "00"})
)
export const removeMember = (userNo: number) => client.delete(`/users/${userNo}`)

// 게시판
export const fetchBoard = (boardNo: number) => client.get(`/boards/${boardNo}`)
export const fetchBoardList = () => client.get("/boards")
export const modifyBoard = (boardNo: number, title: string, content: string) => client.put(`/boards/${boardNo}`, { title, content })
export const writeBoard = (title: string, content: string) => client.post(`/boards/`, { title, content })
export const removeBoard = (boardNo: number) => client.delete(`/boards/${boardNo}`)

// 공지사항
export const fetchNotice = (noticeNo: number) => client.get(`/notices/${noticeNo}`)
export const fetchNoticeList = () => client.get("/notices")
export const modifyNotice = (noticeNo: number, title: string, content: string) => client.put(`/notices/${noticeNo}`, { title, content })
export const writeNotice = (title: string, content: string) => client.post(`/notices/`, { title, content })
export const removeNotice = (noticeNo: number) => client.delete(`/notices/${noticeNo}`)

export const fetchItem = (itemId: any) => client.get(`/items/${itemId}`)
export const fetchItemList = () => client.get(`/items`)
export const modifyItem = (itemId: any, formData: FormData) => client.put(`/items/${itemId}`, formData, {
    headers: {
        "Content-type": "multipart/form-data"
    }
})
export const writeItem = (formData: FormData) => client.post(`/items`, formData, {
    headers: {
        "Content-type": "multipart/form-data"
    }
})
export const removeItem = (itemId: any) => client.delete(`/items/${itemId}`)

