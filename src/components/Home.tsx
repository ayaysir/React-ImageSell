import { Link } from "react-router-dom"
import HomeImage from "../assets/main.png"

function Home() {
    return (
        <article>
            <h1>이미지 샵에 오신 것을 환영합니다.</h1>
            <img src={HomeImage} style={{width: "800px"}} alt="메인 이미지" /> 
            {/* <p>{new Date().toString()}</p> */}
            <ul>
                <li>처음 오신 분은 <Link to="/signup">회원가입</Link>을 해주세요.</li>
                <li>회원가입을 하시면 이미지 구입에 필요한 코인을 무한 충전할 수 있습니다!</li>
            </ul>
        </article>
    )
}

export default Home