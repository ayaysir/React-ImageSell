import { createSelector } from "reselect"

// access token 전달 선택자 함수
const getAccessToken = (state: any) => state.auth.accessToken

// 사용자 정보 전달 선택자 함수
const getMyInfo = (state: any) => state.auth.myInfo

// 로그인 여부 선택자 함수
export const getAuthorized = createSelector(
    [getAccessToken, getMyInfo],
    (accessToken, myInfo) => accessToken.length > 0 && !!myInfo
) 

// 운영자 여부
export const isAdmin = createSelector(
    [getAuthorized, getMyInfo],
    (isAuthorized, myInfo) => isAuthorized && myInfo.authList[0].auth === "ROLE_ADMIN"
)

// 회원 여부 선택자 함수
export const isMember = createSelector(
    [getAuthorized, getMyInfo],
    (isAuthorized, myInfo) => isAuthorized && myInfo.authList[0].auth === "ROLE_MEMBER"
)