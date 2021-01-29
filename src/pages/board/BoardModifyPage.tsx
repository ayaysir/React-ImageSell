import BoardModifyContainer from "../../containers/board/BoardModifyContainer";
import MainLayout from "../../layout/MainLayout";

function BoardModifyPage({ match }: any) {

    const { boardNo } = match.params

    return(
        <MainLayout>
            <BoardModifyContainer boardNo={boardNo} />
        </MainLayout>
    )
}

export default BoardModifyPage