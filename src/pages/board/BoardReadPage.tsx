import BoardReadContainer from "../../containers/board/BoardReadContainer";
import MainLayout from "../../layout/MainLayout";

function BoardReadPage({ match }: any) {

    const { boardNo } = match.params

    return(
        <MainLayout>
            <BoardReadContainer boardNo={boardNo} />
        </MainLayout>
    )
}

export default BoardReadPage