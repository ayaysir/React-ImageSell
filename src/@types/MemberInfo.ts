import { RouteComponentProps } from "react-router-dom";

export interface MemberInfo {
    isLoading: boolean
}

export interface MemberListInfo extends MemberInfo {
    members: any
}

export interface MemberModifyInfo extends MemberInfo{
    member: any
    onModify: any    
}

export interface MemberReadInfo extends MemberInfo{
    member: any
    userNo: number
    onRemove: any    
}

export interface MemberRegisterInfo {
    onRegister: any
}

export interface MemberUsernoProps extends RouteComponentProps<any> {
    userNo: number
}


