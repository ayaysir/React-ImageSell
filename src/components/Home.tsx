import { Link } from "react-router-dom"
import HomeImage from "../assets/main.png"
import greenCircle from "../assets/green_circle.png"
import redCircle from "../assets/red_circle.png"

function Home({ isApiOpened, isLoading }: any) {

    return (
        <article>
            <h1>이미지 샵에 오신 것을 환영합니다.</h1>
            <img src={HomeImage} style={{width: "800px"}} alt="메인 이미지" /> 
            {isLoading && <p className="label-server-status">서버 오픈 여부 확인중...</p>}
            {!isLoading && isApiOpened && (
                <div className="label-server-status success">
                    <img src={greenCircle} alt="" />&nbsp;
                    <span><strong>API 서버 오픈됨</strong></span>
                    <span> - 이미지샵이 정상적으로 동작합니다.</span>
                </div>
            )}
            {!isLoading && !isApiOpened && (
                <div className="label-server-status failure">
                    <img src={redCircle} alt="" />&nbsp; 
                    <span><strong>API 서버 닫힘</strong></span>
                    <span> - 이미지샵 API 서버가 꺼져있거나 오류가 발생했습니다. 운영자에게 문의하세요.</span>
                </div>
            )}
            <ul>
                <li>처음 오신 분은 <Link to="/signup">회원가입</Link>을 해주세요.</li>
                <li>회원가입을 하시면 이미지 구입에 필요한 코인을 무한 충전할 수 있습니다!</li>
            </ul>
        </article>
    )
}

export default Home