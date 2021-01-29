export default function httpStatusHandler(err: any, routeHistory: any) {
    console.log(err, routeHistory)
    if(err.response.status === 400) {
        alert("잘못된 요청입니다.")
        return
    } else if(err.response.status === 401) {
        alert("로그인이 필요합니다.")
        routeHistory.push("/signin")
        return
    } else {
        alert(err.response.data.message)
        return
    }
}