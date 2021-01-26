import client from "./client"

export const adminSetup = (userId: number, userName: string, userPassword: string) => client.post("/users/setup", {
    userId,
    userName,
    userPw: userPassword
})