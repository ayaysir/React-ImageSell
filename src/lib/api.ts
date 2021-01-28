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
