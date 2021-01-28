import { RouteComponentProps, withRouter } from "react-router-dom";
import SignUpForm from "../../components/auth/SingUpForm";
import { signUp } from "../../lib/api";

const SignUpContainer = ({ history }: RouteComponentProps<any>) => {
    // 등록 처리
    const onSignUp = async (userId: string, userName: string, password: string, job: string) => {
        try {
            await signUp(userId, userName, password, job)
            alert("회원가입이 완료되었습니다.")
            history.push("/signin")
        } catch (error) {
            if(error.response.status === 400) {
                alert("잘못된 요청입니다.")
            } else {
                alert(error.response.data.message)
            }
        }
    }

    return (
        <SignUpForm onSignUp={onSignUp} />
    )
}

export default withRouter(SignUpContainer)
/*
withRouter 함수는 HOC(High-order Component)이다. 라우트로 사용된 컴포넌트가 아니어도
match, location, history 객체에 접근할 수 있게 해준다. 
*/