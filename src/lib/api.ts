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

