import { RouteComponentProps } from "react-router-dom";

export interface RouteComponentPropsWithGroupCode extends RouteComponentProps<any> {
    groupCode: string
}