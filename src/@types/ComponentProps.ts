import { RouteComponentProps } from "react-router-dom";

export interface RouteComponentPropsWithGroupCode extends RouteComponentProps<any> {
    groupCode: string,
}

export interface CodeDetailComponentProps extends RouteComponentProps<any> {
    groupCode: string,
    codeValue: string
}